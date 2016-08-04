window.onload = function(){
    var cmp,
        user,
        lvl,
        counter,
        looper,
        userClicks,
        red = document.getElementById('red'),
        blue = document.getElementById('blue'),
        green = document.getElementById('green'),
        yellow = document.getElementById('yellow'),
        play = document.getElementById('play'),
        end = document.getElementById('end'),
        round = document.getElementById('round'),
        sound = document.getElementById('audio');


        init();
        play.addEventListener('click', loop);
        end.addEventListener('click', endGame);


};

// initilazing the arrays that will hold cmp and user input
function init(){
    cmp = [];
    user = [];
    lvl = 0;
    counter = 0;
    userClicks = 0;
    round.innerHTML= lvl;
}

function loop(){
    play.style.display = 'none';
    end.style.display = 'block';
    computerTurn(cmp);
    console.log('cmp data: ' + cmp);
    console.log('cmp length ' + counter);
    console.log('user data: ' + user);
    runMe();
}

// function for user control
function runMe(){
        if(counter == userClicks){
            // remove event listeners because we reached the end of cmp length
            removeEvent();
            console.log('user data: ' + user);

            setTimeout(function(){
                user = [];
                userClicks = 0;
                loop();}, 1000);
        }
}

// Function to determin random computer choice
function computerTurn(computer){
     lvl += 1;
     round.innerHTML= lvl;
     computer.push(Math.floor(Math.random()*4));
     counter = computer.length;
     animate(computer);
     addEvent();
}

// animate the light function
function lightMeUp(id){
    setTimeout(function(){
        id.style.opacity = '1';        
        sound.volume = 0.5;
        sound.play();}, 400);
    setTimeout(function(){lightMeDown(id)},800);

}

function lightMeDown(id){
    id.style.opacity = '0.5';
}


// function deciding witch ID to pick
function idDetection(item){
    switch (item) {
        case 0:
            lightMeUp(red);
            break;
        case 1:
            lightMeUp(blue);
            break;
        case 2:
            lightMeUp(yellow);
            break;
        case 3:
            lightMeUp(green);
            break;
    }
}

// animate the sequance of lights
function animate(sequence){
    var i= 0, x = sequence.length;
    looper = setInterval( function(){
        idDetection(sequence[i]);
        i++;
        if( i >= x) {clearInterval(looper);}
    }, 900);
}


// user regustured clicks
function userInteraction(id){
    switch (id) {
        case red:
            user.push(0);
            idDetection(0);
            if(cmp[userClicks] != user[userClicks]){
                alert('YOU JUST LOSE\n pay better attention next time [if you can]');
                endGame();
                break;
            }
            userClicks += 1;
            console.log('i am pushing and clicks are ' + userClicks);
            runMe();
            break;
        case blue:
            user.push(1);
            idDetection(1);
            if(cmp[userClicks] != user[userClicks]){
                alert('YOU JUST LOSE\n pay better attention next time [if you can]');
                endGame();
                break;
            }
            userClicks += 1;
            console.log('i am pushing and clicks are ' + userClicks);
            runMe();
            break;
        case yellow:
            user.push(2);
            idDetection(2);
            if(cmp[userClicks] != user[userClicks]){
                alert('YOU JUST LOSE\n pay better attention next time [if you can]');
                endGame();
                break;
            }
            userClicks += 1;
            console.log('i am pushing and clicks are ' + userClicks);
            runMe();
            break;
        case green:
            user.push(3);
            idDetection(3);
            if(cmp[userClicks] != user[userClicks]){
                alert('YOU JUST LOSE\n pay better attention next time [if you can]');
                endGame();
                break;
            }
            userClicks += 1;
            console.log('i am pushing and clicks are ' + userClicks);
            runMe();
            break;
    }
}

// function to add event listeners
function addEvent(){
    // Enable user interaction with the board, and register any clicks on the Simon tiles
    red.addEventListener('click', usersTurn);
    blue.addEventListener('click', usersTurn);
    yellow.addEventListener('click', usersTurn);
    green.addEventListener('click', usersTurn);

}

// function to disable event listeners
function removeEvent(){
    red.removeEventListener('click', usersTurn);
    blue.removeEventListener('click', usersTurn);
    yellow.removeEventListener('click', usersTurn);
    green.removeEventListener('click', usersTurn);
}

function usersTurn() {
    userInteraction(this);
}

function endGame(){
    play.style.display = 'block';
    end.style.display = 'none';
    console.log('YOU LOSE');
    init();
    removeEvent();

}
