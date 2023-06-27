const express = require("express");
const sprequest = require("sp-request");
const nodemailer = require("nodemailer")
//setup connection for sprequest
let spr = sprequest.create({
	username: 'Lupe.Integration',
    password: 'Green0!',
    domain: 'RDMINC'
});
//setup smtp auth for nodemailer
let transporter = nodemailer.createTransport(
{
	host:"lupetortilla-com.mail.protection.outlook.com",
	port:25,
	secure: false
});

const app = express();
const port = process.env.PORT || 8600;

app.engine('html', require('ejs').renderFile);
app.use(express.static('public'))
app.set('views', __dirname+'/public')

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://sp.lupetortilla.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res) =>{
	res.render('fieldsPage.html')
});

app.get('/Lupe.html',(req,res) =>{
	res.render('Lupe.html')
});

app.get("/CateringItemList.json", (req,res) => {
	fields = ['Title','Price','Category','Serves','Description']
	resultList = []
	spr.get('https://sp.lupetortilla.com/_api/web/lists/GetbyTitle(\'CateringProposalItems\')/items?$filter=ProposalType eq \'Catering\'')
		.then(response => {
			for (i of response.body.d.results) {
				var item = {};
				for (k of fields) {
					item[k] = i[k];	
				}
				resultList.push(item);
				}
			returnObject = {}
			returnObject.Items = resultList
			res.json(returnObject)
			//console.log(returnObject);
			
			
		})
		.catch(err =>{
			console.log(err);
	
	})
	
	;})


app.post("/send" , (req,res) => {
	// verify connection configuration
	console.log(req.body.sender);


	var mailOptions = {
	  from: req.body.sender,
	  to: req.body.email,
	  subject: req.body.subject,
	  html: req.body.emailBody
	};
	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
		console.log(error);
	  } else {
		console.log('Email sent: ' + info.response);
	  }
	});
	
})


app.get("/api", (req, res) => {
  res.json("Hello");
});

app.listen(port, () => console.log(`Listening on port ${port}`));


