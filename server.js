const express = require("express");
const sprequest = require("sp-request");
let spr = sprequest.create({
	username: 'Lupe.Integration',
    password: 'Green0!',
    domain: 'RDMINC'
});


const app = express();
const port = process.env.SERVER_PORT || 8600;

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

app.get('/',(req,res) =>{
	res.render('fieldsPage.html')
});

app.get('/Lupe.html',(req,res) =>{
	res.render('Lupe.html')
});

app.get("/CateringItemList.json", (req,res) => {
	fields = ['Title','Price','Category','Serves']
	resultList = []
	spr.get('https://sp.lupetortilla.com/_api/web/lists/GetbyTitle(\'CateringProposalItems\')/items')
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
			console.log(returnObject);
			
			
		})
		.catch(err =>{
			console.log(err);
	
	})
	
	;})
	


app.get("/api", (req, res) => {
  res.json("Hello");
});

app.listen(port, () => console.log(`Listening on port ${port}`));


