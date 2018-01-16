var slow_circle_x = 0;
var fast_circle_x = 0;
var growth_slow = 1;
var growth_fast = 5;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
   // shape features
  noStroke();
}

function draw() {
  background("#1BB1F5"); // set the background color
  
  fill("#C1FF3E");
  ellipse(slow_circle_x, 50, 50, 50);
  slow_circle_x += growth_slow;
  
  fill("#FF4800");
  ellipse(fast_circle_x, 50, 50, 50);
  fast_circle_x += growth_fast;
  
  // conditional to check if the circle reached the border
  if(slow_circle_x >= (width + 25)) {
    slow_circle_x = 0; // we do this to give the illution that it's looping
  }
  
  if(fast_circle_x >= (width + 25)) {
    fast_circle_x = 0;
  }
}