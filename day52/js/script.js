var hr,
    min,
    sec;
var intervalHandler;
var paused = false;
var sound = new Howl({
  src: ['../sound/ring.wav'],
  volume: 0.5
});

function resetTimer() {
  hr = 0;
  min = 0;
  sec = 0;
  clearInterval(intervalHandler);
  document.getElementById("handel").style.transform = `rotate(90deg)`;
  document.getElementById("timer").classList.add("hide");
  document.getElementById("inputArea").style.display = "block";
}

function pauseTimer() {
  document.getElementById("timer").classList.toggle("pause");
  paused = hasClass(document.getElementById("timer"), "pause");

}

function hasClass(el, cls){
  return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
}

function tickker() {
  // get the h1 to display the time
  document.getElementById("timer").classList.remove("hide");
  if(!paused){
    var displayedTime = document.getElementById("timer");
    var message = "";
    // check for undefined
    if(hr === undefined) {
      hr = 0;
    }

    if(min === undefined) {
      min = 0;
    }

    if(sec <=0 && min > 0){
      min-= 1;
      sec= 59;
    }

    if(sec <=0 && min <=0 && hr > 0){
      min = 59;
      sec= 59;
      hr -= 1;
    }

    sec -= 1;

    if (hr < 10){
      message += "0" + hr + ":";
    } else {
      message += hr + ":";
    }
    if (min < 10){
      message += "0" + min + ":";
    } else {
      message += min + ":";
    }
    if (sec < 10){
      message += "0" + sec;
    } else {
      message += sec;
    }

    var seconds = ((sec/60) * 360) + 270;
    document.getElementById("handel").style.transform = `rotate(-${seconds}deg)`;
    // display message
    displayedTime.textContent = message;
  }


  // when time reached zero
  if(sec === 0 && min === 0 && hr == 0){
    document.querySelector(".timeUp").style.display = "block";
    sound.play();
    resetTimer();
  }

}

function startCountdown(){
  var countdownTime = document.getElementById('time').value;

  // clear input feild
  document.getElementById('time').value = "";

  // extract time
  if(countdownTime.includes(":")){
    countdownTime = countdownTime.split(":");
    var counter = 1;
    for (var i = countdownTime.length-1; i >= 0; i--) {
      if (counter === 1) {
        sec = Number(countdownTime[i]);
      } else if (counter === 2) {
        min = Number(countdownTime[i]);
      } else if (counter === 3) {
        hr = Number(countdownTime[i]);
      }
      counter += 1;
    }

    console.log(`time: ${hr}:${min}:${sec}`);

    // start Countdown
    // every seconds call the tickker
    intervalHandler = setInterval(tickker, 1000);

    // hide the form element
    document.getElementById("inputArea").style.display = "none";
  } else {
    alert("Please insert time in the correct format");
    return;
  }

  console.log(countdownTime);

}


window.onload = function () {
  // create the inout feald
  var time = document.createElement("input");
             time.setAttribute("id", "time");
             time.setAttribute("type", "text");
             time.setAttribute("placeholder", "00:00:00");

  // create the button
  // var startBtn = document.createElement("input");
  //                startBtn.setAttribute("type", "button");
  //                startBtn.setAttribute("value", "Start Countdown");
  //                startBtn.onclick = function(){
  //                  startCountdown();
  //                };

  // add the elements to the dom
  document.getElementById("inputArea").appendChild(time);
  // document.getElementById("inputArea").appendChild(startBtn);

  // add event listners
  document.querySelector(".play").addEventListener("click", function(){
    startCountdown();
  });

  document.querySelector(".refresh").addEventListener("click", function(){
    resetTimer();
  });

  document.querySelector(".stop").addEventListener("click", function(){
    pauseTimer();
  });

  document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".timeUp").style.display = "none";
  });
}
