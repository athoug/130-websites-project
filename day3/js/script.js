// setting timers (varables)
var clickedTime, createdTime, reactionTime;


// make box event
function makeTardis() {

    var time = Math.random()*5000; // settig the timer

    setTimeout(function(){

    // Getting the document hight and width for responsivness
    var windowWidth = (window.innerWidth) - 80;
    var windowHight = (window.innerHeight) - 250;

    // randomly changing the top and left position of the element
    var top = Math.random()*windowHight;
    var left = Math.random()*windowWidth;

    // getting the hight and width of the client to adjust the siz of the tardis (for responsivness)
    var height = document.body.clientHeight;
    var width = document.body.clientWidth;

    // targeting the element and changing its position and display
    document.getElementById('tardis').style.top = top+'px';
    document.getElementById('tardis').style.left = left+'px';
    document.getElementById('tardis').style.display = 'block';

    // grabing the time in miliseconds upon creation
    createdTime = Date.now();
  }
    ,time);
  }

makeTardis();

// click event handler
document.getElementById('tardis').onclick = function() {
  clickedTime = Date.now();

  reactionTime = (clickedTime - createdTime)/1000;

  document.getElementById('time').innerHTML = reactionTime;

  this.style.display = 'none';
  makeTardis();
};
