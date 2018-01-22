// variable
var circleSize = 100;
var circleX;
var circleY;

var moveX;
var moveY;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  stroke(153, 252, 217);
  strokeWeight(4);
  noFill();

  // assign initial values to the position of the circle
  circleX = (width / 2);
  circleY = (height / 2);
}

function draw() {
  background(22, 155, 107); // to remove shape trail we move background here
  ellipse(circleX, circleY, circleSize, circleSize);

  // move the x and y at a random range between -5 and 5
  moveX = random(-5, 5);
  moveY = random(-5, 5);

  // increment values
  circleX += moveX;
  circleY += moveY;
}