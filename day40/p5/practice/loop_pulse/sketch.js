var slow_circle_x = 0;
var fast_circle_x = 0;

var slow_circle_size;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
}

function draw() {
  background(241, 196, 15);
  
  slow_circle_size = 50; // set the size of the circle
  
  if(random(10) > 9) {
    slow_circle_size = 60;
  }
  
  fill(211, 84, 0);
  ellipse(slow_circle_x, height/2, slow_circle_size, slow_circle_size);
  slow_circle_x += 1;
  
  fill(230, 126, 34);
  ellipse(fast_circle_x, height/2, 50, 50);
  fast_circle_x += 5;
  
  if(slow_circle_x > (width + 25)) {
    slow_circle_x = 0;
  }
  
  if(fast_circle_x > (width + 25)) {
    fast_circle_x = 0;
  }
}