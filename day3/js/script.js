// string values
var info = "You're in a convention center, and you want to meet the doctor! Test your reaction time by trying to find the Tardis amongst the crowd."

// setting timers (varables)
var clickedTime, createdTime, reactionTime;

// setting up varable
var score = 0;
var reactions = []; // The array that will hold the diffrent times
var average = 0;
var total = 0;
var stop = false;
var fullScore = 0;

// calculate score and adding time record;
function calculateScore(reaction){
    // adding the reaction time to the array
    reactions.push(reaction);

    fullScore += 20; // The grading

    // setting the score
    if (reaction < 1){
        score += 20;
    }
    else if (reaction > 1 && reaction < 10) {
        score += 10;
    }
    else if (reaction > 10 && reaction < 20) {
        score += 5;
    } else {
        score += 1;
    }
    console.log(reactions);
}

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

    // targeting the element and changing its position and display
    document.getElementById('tardis').style.top = top+'px';
    document.getElementById('tardis').style.left = left+'px';
    document.getElementById('tardis').style.display = 'block';

    // grabing the time in miliseconds upon creation
    createdTime = Date.now();
  }
    ,time);
  }

// click event handler (for tardis click)
document.getElementById('tardis').onclick = function() {
  if(stop == false){
  clickedTime = Date.now();

  reactionTime = (clickedTime - createdTime)/1000;
  calculateScore(reactionTime);

  document.getElementById('time').innerHTML = reactionTime.toFixed(2);
  document.getElementById('score').innerHTML = score + '/' + fullScore;
  this.style.display = 'none';

  // if the game is still on keep generating the tardis
       makeTardis();
  }

};

// click event handler (for game stop click)
document.getElementById('button').onclick = function() {

    if (stop == false){
        stop = true;

        // calculating the total
        for(var i=0; i<reactions.length; i++){
            total += reactions[i];
        }

        // calculating the average
        average = total/reactions.length;

        document.getElementById('info').innerHTML =  '<strong>Your average time is: </strong>' + average.toFixed(2) + 's';
        document.getElementById('time').innerHTML = 0;
        document.getElementById('button').innerHTML = 'Restart Game';
    } else {

        stop = false;
        document.getElementById('info').innerHTML = info;
        document.getElementById('button').innerHTML = 'Stop Game';
        document.getElementById('score').innerHTML = score;
        score = 0;
        fullScore = 0;
        reactions = [];
        makeTardis();
    }



};


makeTardis(); // call the function that will create the box
