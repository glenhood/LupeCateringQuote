var script = document.createElement('script');script.src = "//cdn.jsdelivr.net/npm/sharepointplus/browser/sharepointplus.js";document.getElementsByTagName('head')[0].appendChild(script);

// var authData = {username:'Ghood', password:'UTTech1!', domain:'rdminc'}
const credentials = {
    username:'Ghood',
    password:'UTTech1!',
    domain:'rdminc'
  };
  // you can also define a proxy
  const proxyweb = "http://" + credentials.domain + "%5C" + credentials.username + ":" + credentials.password + "@proxy:80";
  
//   const $SP = require('sharepointplus');
const sp = $SP().proxy(proxyweb).auth(credentials);

sp.list("CateringProposalItems");

  
// fields = ['Title','Price','Category']
// $SP().auth(authData)
//     .list("CateringProposalItems", "https://sp.lupetortilla.com")
//     .get({fields:fields.join(',')})
//     .then(function(data){
//         for (i of data) {
//             for (k of fields) {
//                 console.log(k + ': ' + i.getAttribute(k))
//             }
//             }
//         }
//     )