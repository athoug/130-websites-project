function getTime () {
  var timeText = '';
  var minutetext = '';
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();

  if(hour < 10) {
    timeText += '0';
  }

   if(minute < 10) {
    minutetext += '0';
  }

  if(hour < 12) {
    amElement.style.background = '#F3542F';
    pmElement.style.background = '#6C301E';
  } else {
    pmElement.style.background = '#F3542F';
    amElement.style.background = '#6C301E';
  }

  timeText += hour + ":" + minutetext + minute;

  return timeText;
}

var timeElement = document.getElementsByClassName('time')[0];
var amElement = document.getElementsByClassName('am-dot')[0];
var pmElement = document.getElementsByClassName('pm-dot')[0];
var textTime = getTime ();


timeElement.textContent = textTime;

setInterval(function() {
  textTime = getTime ();
  timeElement.textContent = textTime;
}, 60000);
