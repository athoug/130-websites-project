var circle_x = 1;
var growth = 5;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background("#F57E7E");
  noStroke(); // remove the black border
  fill("#CE4141"); // chnage shape fill colors
}

function draw() {
  background("#F57E7E");
  
   // move a circle from left to right
  ellipse(circle_x, 50, 50, 50); 
  circle_x += growth;
}