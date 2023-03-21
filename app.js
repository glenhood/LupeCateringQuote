// import $SP from 'sharepointplus'
// global.$SP=$SP;

var script = document.createElement('script');script.src = "//cdn.jsdelivr.net/npm/sharepointplus/browser/sharepointplus.js";document.getElementsByTagName('head')[0].appendChild(script);
var authData = {username:'Ghood', password:'UTTech1!', domain:'rdminc'}
fields = ['Title','Price','Category']
$SP().auth(authData)
    .list("CateringProposalItems", "https://sp.lupetortilla.com")
    .get({fields:fields.join(',')})
    .then(function(data){
        for (i of data) {
            for (k of fields) {
                console.log(k + ': ' + i.getAttribute(k))
            }
            }
        }
    )