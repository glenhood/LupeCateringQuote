var name = localStorage.getItem('name');
var edate = localStorage.getItem('edate');
var phone = localStorage.getItem('phone');
var email = localStorage.getItem('email');
var time = localStorage.getItem('time');
var address = localStorage.getItem('address');
var zcode = localStorage.getItem('zcode');
var city = localStorage.getItem('city');
var total = localStorage.getItem('total');
var theme = localStorage.getItem('theme');
var location = localStorage.getItem('location');
var lservice = localStorage.getItem('lservice');
var fajitaData = localStorage.getItem('fajita-data');
var addOnData = localStorage.getItem('addOns-data');
var sidesTortillasData = localStorage.getItem('sidesAndTortillas-data');
var EFTData = localStorage.getItem('ETF-data');
var margData = localStorage.getItem('marg-data');
var servData = localStorage.getItem('serv-data');
var dessertData = localStorage.getItem('dessert-data');
var rentalData = localStorage.getItem('rental-data');
var servsData = localStorage.getItem('serv-data');
var savedTotal = localStorage.getItem('grandTotal');
var savedTax = localStorage.getItem('tax');
var savedGratuity = localStorage.getItem('gratuity');
var savedGrandtotal = localStorage.getItem('ggrandTotal');



if (fajitaData) {
  var fajitaItems = JSON.parse(fajitaData);
  var html = '';

  fajitaItems.forEach(function(item) {
    html += '<li>' + item.title + ',      Serves: ' + item.serves + ',      Price: $' + item.price.toFixed(2) + ',      Total: $' + item.sum.toFixed(2) + '</li>';
  });

  var ul = document.getElementById('fajita-list');
  ul.innerHTML = html;
}
if (addOnData) {
  var addOnItems = JSON.parse(addOnData);
  var html = '';

  addOnItems.forEach(function(item) {
    html += '<li>' + item.title + ',  Serves: ' + item.serves + ',  Price: $' + item.price.toFixed(2) + ',  Total: $' + item.sum.toFixed(2) + '</li>';
  });

  var ul = document.getElementById('addOn-list');
  ul.innerHTML = html;
}
if (sidesTortillasData) {
  var sidesTortillasItems = JSON.parse(sidesTortillasData);
  var html = '';

  sidesTortillasItems.forEach(function(item) {
    html += '<li>' + item.title + ',  Serves: ' + item.serves + ',  Price: $' + item.price.toFixed(2) + ',  Total: $' + item.sum.toFixed(2) + '</li>';
  });

  var ul = document.getElementById('sidesTortillas-list');
  ul.innerHTML = html;
}
if (EFTData) {
  var ETFItems = JSON.parse(EFTData);
  var html = '';

  ETFItems.forEach(function(item) {
    html += '<li>' + item.title + ',  Serves: ' + item.serves + ',  Price: $' + item.price.toFixed(2) + ',  Total: $' + item.sum.toFixed(2) + '</li>';
  });

  var ul = document.getElementById('EFT-list');
  ul.innerHTML = html;
}
if (margData) {
  var margItems = JSON.parse(margData);
  var html = '';

  margItems.forEach(function(item) {
    html += '<li>' + item.title + ',  Serves: ' + item.serves + ',  Price: $' + item.price.toFixed(2) + ',  Total: $' + item.sum.toFixed(2) + '</li>';
  });

  var ul = document.getElementById('marg-list');
  ul.innerHTML = html;
}
if (dessertData) {
  var dessertItems = JSON.parse(dessertData);
  var html = '';

  dessertItems.forEach(function(item) {
    html += '<li>' + item.title + ',  Serves: ' + item.serves + ',  Price: $' + item.price.toFixed(2) + ',  Total: $' + item.sum.toFixed(2) + '</li>';
  });

  var ul = document.getElementById('dessert-list');
  ul.innerHTML = html;
}
if (servData) {
  var servItems = JSON.parse(servData);
  var html = '';

  servItems.forEach(function(item) {
    html += '<li>' + item.title +  ',  Total: $' + item.sum.toFixed(2) + '</li>';
  });

  var ul = document.getElementById('serv-list');
  ul.innerHTML = html;
}
if (rentalData) {
  var rentalItems = JSON.parse(rentalData);
  var html = '';

  rentalItems.forEach(function(item) {
    html += '<li>' + item.title + '</li>';
  });

  var ul = document.getElementById('rental-list');
  ul.innerHTML = html;
}


document.getElementById('name').value = name;
document.getElementById('edate').value = edate;
document.getElementById('phone').value = phone;
document.getElementById('email').value = email;
document.getElementById('time').value = time;
document.getElementById('address').value = address;
document.getElementById('zcode').value = zcode;
document.getElementById('city').value = city;
document.getElementById('total').value = total;
document.getElementById('theme').value = theme;
document.getElementById('location').value = location;
document.getElementById('lservice').value = lservice;
document.getElementById('grandtotal').value = savedTotal;
document.getElementById('tax').value = savedTax;
document.getElementById('gratuity').value = savedGratuity;
document.getElementById('ggrandTotal').value = savedGrandtotal;

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
            async function main() {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
                },
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"Glen Hood 👻" <ghood@lupetortilla.com>', // sender address
                to: document.getElementById('email').value, // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            }

            main().catch(console.error);



console.log(rentalData)

localStorage.clear();