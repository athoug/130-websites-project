var y;
var x;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background("#e74c3c"); // setting up the color of the background to be a black shade
  stroke("#c0392b"); // setting up a white color for theline
  strokeWeight(6);
  y = random(height); // generate a random value for y
  line(0, y, width, y);

  x = random(width);
  line(x, 0, x, height);
}