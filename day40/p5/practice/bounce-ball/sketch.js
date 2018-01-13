var x = 400; // starting position for the ball
var grow = 5; // how fast the ball will move with time

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background("#f39c12"); // set the background color for the stage
  noStroke(); // remove stroke
  fill("#d35400"); // set up a fill color for the ellipse
  ellipse(x, height / 2, 100, 100);
  x += grow; // change the position of the ellipse through every itteration by the groth varaible

  // make sure that it doesn't go off the screen (create walls)
  if ((x >= width - 50) || (x <= 50)) {
    grow *= -1; // if it goes off bount change the direction of growths
  }
}