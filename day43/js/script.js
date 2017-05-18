var ratesCurrancy;
var rates;
var httpRequest

window.onload = function() {

  // grab todays date
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var today = new Date();
  var date = document.getElementById("date");
  date.innerHTML = "" + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();

  // THE MONEY.JS TESTING
  fx.base = "USD";
  fx.rates = {
  	"EUR" : 0.745101, // eg. 1 USD === 0.745101 EUR
  	"GBP" : 0.647710, // etc...
  	"HKD" : 7.781919,
  	"USD" : 1,        // always include the base rate (1:1)
  	/* etc */
  }
  console.log(fx(1000).from('GBP').to("EUR"));

  // Getting the Rates usig AJAX request
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = saveCurrancy;
  httpRequest.open("GET", "https://openexchangerates.org/api/latest.json?app_id=e6d4c633ac72461c86aba2eebca365b8", false);
  httpRequest.send();


}

// AJAX curancy to object parsing
function saveCurrancy() {
  if(httpRequest.readyState === XMLHttpRequest.DONE){
    if (httpRequest.status === 200) {
        ratesCurrancy = JSON.parse(httpRequest.responseText);
        console.log(ratesCurrancy);
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
  }
}
