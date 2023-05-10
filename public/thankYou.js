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
document.getElementById('fajita-data').value = fajitaData;
document.getElementById('addOn-data').value = addOnData;
document.getElementById('sidesTortillas-data').value = sidesTortillasData;
document.getElementById('EFT-data').value = EFTData;
document.getElementById('marg-data').value = margData;
document.getElementById('dessert-data').value = dessertData;
document.getElementById('rental-data').value = rentalData;
document.getElementById('servs-data').value = servsData;

if (fajitaData) {
    var fajitaItems = JSON.parse(fajitaData);
  
    var ul = document.getElementById("fajita-list");
  
    fajitaItems.forEach(function(item) {
      var li = document.createElement("li");
      li.textContent = item.title + ", Serves: " + item.serves + ", Price: $" + item.price.toFixed(2);
      ul.appendChild(li);
    });
  }


console.log(servsData)