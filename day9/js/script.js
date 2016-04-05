// grab a refrence to the canves element
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d'); // creating a ctx varable to store the 2d rendering context (the tool to use to paint on the canvas)

// defining the variables (starting point of the circle) to be moved to
var x = canvas.width/2;
var y = canvas.height-30;
// varables to update my x, and y varables when drawing them
var dx = 2;
var dy = -2;
// the ball radius
var ballRadius = 10;
// defining the paddle varaiables
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth)/2;
// variables to check if the keyboard keys are pressed to move the paddle
var rightPressed = false;
var leftPressed = false;
// setting up the bricks varables
var brickRowCount = 6;
var brickColumnCount = 5;
var brickWidth = 75;
var brickheight = 20;
var brickPadding = 10;
var brickOffsetTop = 40;
var brickOffsetLeft = 30;
// keeping score varable
var score = 0;
// setting the lives varable
var lives = 3;
// color list
var colors = ['Aquamarine', 'chartreuse','cornflowerblue', 'crimson', 'gold', 'darkviolet'];
// creating the bricks ia 2d array (default values) this is the inicilization part where we reserve place in memory for the bricks
var bricks = [];
for(c=0; c< brickColumnCount; c++) { // first loop will hold the columns
    bricks[c] = [];
    for(r=0; r< brickRowCount; r++) { // loop through rows
        bricks[c][r] = {x: 0, y: 0, status: 1}; // object that holds the coordinates of the brick
    }
}

// setting up event listners to see if the keyboards are held down or pressed up
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

// functions to handel the events that we are listening to (keyup and keydown)
function keyDownHandler(e) {
    if(e.keyCode == 39){
        rightPressed = true;
    }
    else if (e.keyCode == 37){
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39){
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
}

function mouseMoveHandler(e){
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width){
        paddleX = relativeX - paddleWidth/2;
    }
}

function drawBall() {
    // drawing ball code
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = 'lightgray';
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "lightgray";
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for (c=0; c < brickColumnCount; c++) {
        for(r=0; r < brickRowCount; r++){
            // keeping track + calcualtion to adjust the position of the brick
            if(bricks[c][r].status == 1){
                var brickX = (c*(brickWidth+brickPadding)) + brickOffsetLeft;
                var brickY = (r*(brickheight+brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;

                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickheight);
                ctx.strokeStyle = colors[r];
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}

// colision detection for bricks
function collisionDetection() {
    for(c=0; c<brickColumnCount; c++){
        for(r=0; r<brickRowCount; r++){
            var b = bricks[c][r];
            // calculation
            if(b.status == 1){
                if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickheight){
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount*brickColumnCount){
                        alert('YOU WIN, CONGRATULATIONS!');
                        document.location.reload();
                    }
                }
            }
        }
    }
}

// drawing the score function
function drawScore(){
    ctx.font = '16px Arial';
    ctx.fillStyle = 'lightgray';
    ctx.fillText('Score: ' + score, 30, 20);
}

// drawing the lives function
function drawLives(){
    ctx.font = '16px Arial';
    ctx.fillStyle = 'lightgray';
    ctx.fillText('Lives: '+lives, canvas.width-90, 20);
}

function draw() {
    // drawing code
    ctx.clearRect(0, 0, canvas.width, canvas.height); // code to clear the screen after to draw a new frame giving the illusion of movment
    drawBricks(); // calling the brick drawif function
    drawBall(); // calling the ball drawing function
    drawPaddle(); // calling the  paddle drawing
    drawScore(); // calling the score draw function to display the current score
    drawLives(); // dispaying the lives
    collisionDetection(); // checking the colision of the ball with the bricks

    // setting up colision detection
    if( x + dx < ballRadius || x + dx > canvas.width - ballRadius) { // setting the left and right coliders
        dx = -dx;
    }
    if(y + dy < ballRadius){ // setting the top and bottom coliders
        dy = -dy;
    } else if( y + dy >  canvas.height - ballRadius){
        if( x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {
            lives--;
            if(!lives){
                // when we lose all lives we give the end game message (the condition is falsy value 0 = false)
                alert('GAME OVER');
                document.location.reload();
            } else {
                // reseting the values when a life is lost
                x = canvas.width/2;
                y = canvas.height -30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width - paddleWidth)/2;
            }

        }
    }

    // check if the keyboard keys are pressed to move the paddle
    if(rightPressed && paddleX < canvas.width - paddleWidth){ // and adding coliders for paddle{
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    // updating the ball position (the x and y coordinates)
    x += dx;
    y += dy;

    // the looping function that will run teh draw over and over
    requestAnimationFrame(draw);
}

// setInterval(draw, 10); //a javascript timing function that will call the draw function every 10 miliseconds

// we changed the setInterval fucntion to request frame animation for better rendering
draw();
