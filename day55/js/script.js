var days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

var today = new Date();
var todaysDate = days[today.getDay()] + ", " + today.getDate() + " " + months[today.getMonth()];
console.log(todaysDate);

window.onload = function () {
  // set the date
  document.getElementById("date").textContent = todaysDate;
  document.querySelector("h4").textContent = todaysDate;

  // get device location
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("location not supported");
  }
  // start a http protocal
  var request = new XMLHttpRequest();

  // distinguise the method and host
  request.open("GET", "http://api.apixu.com/v1/forecast.json?key=b91bf74929fe4db4b6a33327170906&q=Paris");

  // how to handel the responce
  request.onload = function () {
    // if we get a O.K request this is what we do
    if(request.status >= 200 && request.status < 400){
      var data = JSON.parse(request.responseText);
      console.log(data);
      console.log(request.responseText);
      formatData(data);
    }
    // if we get a client error status || server error
    else {
      console.log("We connected to the server but there were some problems");
    }
  };

  // error handeling
  request.onerror = function () {
    console.log("Connection Error");
  }
  // send the request
  request.send();

  function formatData(d) {
    document.querySelector(".city").textContent = d.location.name;
    document.querySelector(".description").textContent = d.current.condition.text;
    // first temp
    document.querySelectorAll(".c")[0].textContent = d.current.temp_c;
    var time = d.current.last_updated.split(" ");
    document.querySelectorAll(".time")[0].textContent = time[1];

    // second temp
    var hour = time[1].split(":");

  }

  function showPosition(position) {
    console.log("longatude " + position.coords.longitude + "latitude: "+ position.coords.latitude);
  }
}
