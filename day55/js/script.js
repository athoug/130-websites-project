window.onload = function () {
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
    var message = "<h1>Temprature: " + d.current.temp_c + "</h1>";
    message += "<h1>" + d.current.condition.text + "</h1>";
      message += "<img src='" + d.current.condition.icon + "' />"
    document.body.innerHTML = message;
  }
}
