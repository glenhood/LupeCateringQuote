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

console.log(fajitaData)