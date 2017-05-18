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
}
