const express = require("express");
const sprequest = require("sp-request");
let spr = sprequest.create({
	username: 'Lupe.Integration',
    password: 'Green0!',
    domain: 'RDMINC'
});


const app = express();
const port = process.env.SERVER_PORT || 8000;

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://sp.lupetortilla.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req,res) => {
	fields = ['Title','Price','Category']
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
			res.send(resultList)
			
		})
		.catch(err =>{
			console.log(err);
	
	})
	
	;})
	


app.get("/api", (req, res) => {
  res.json("Hello");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
