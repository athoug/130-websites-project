var ratesCurrancy;
var rates = new Object();
var httpRequest

window.onload = function() {

  // Setting the date
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var today = new Date();
  var date = document.getElementById("date");
  date.innerHTML = "" + months[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();


  // Getting the Rates usig AJAX request
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = saveCurrancy;
  httpRequest.open("GET", "https://openexchangerates.org/api/latest.json?app_id=e6d4c633ac72461c86aba2eebca365b8", false);
  httpRequest.send();
  copyRates();

  // creating the list options
  var topSelect = document.getElementById("topCurrencySelector");
  var bottomSelect = document.getElementById("bottomCurrencySelector");

  for(var currancy in rates) {
    var newItem1 = document.createElement("option");
    var newItem2 = document.createElement("option");
    var text1 = document.createTextNode("" + currancy + "");
    var text2 = document.createTextNode("" + currancy + "");
    newItem1.appendChild(text1);
    newItem2.appendChild(text2);
    topSelect.appendChild(newItem1);
    bottomSelect.appendChild(newItem2);
  }

  // set up event listener
  var btn = document.getElementById("convert-btn");
  btn.onclick = convert;

}

// AJAX curancy to object parsing
function saveCurrancy() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      ratesCurrancy = JSON.parse(httpRequest.responseText);
      console.log(ratesCurrancy);
      // alert(httpRequest.responseText);
    } else {
      alert('There was a problem with the request.');
    }
  }
}

function copyRates() {
  for (var CountryRate in ratesCurrancy.rates) {
    rates[CountryRate] = ratesCurrancy.rates[CountryRate];
  }
}

function convert() {
  var topSelect = document.getElementById("topCurrencySelector");
  var bottomSelect = document.getElementById("bottomCurrencySelector");
  var curancy1 = topSelect.options[topSelect.selectedIndex].text;
  var curancy2 = bottomSelect.options[bottomSelect.selectedIndex].text;

  var topCurrency = document.getElementById("topCurrancy");
  var bottomCurrancy = document.getElementById("bottomCurrancy");
  // THE MONEY.JS TESTING
  fx.base = "USD";
  fx.rates = rates;

  // test
  console.log(fx(1000).from('GBP').to("EUR"));
  console.log("selected 1: " + curancy1 + "\n selected 2: " + curancy2);

  bottomCurrancy.value = "" + fx(topCurrency.value).from(curancy1).to(curancy2).toFixed(2);

}
