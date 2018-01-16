var line_y = 50;
var y_increments = 25;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight); // creating the canvas
  
  background(142, 68, 173); // setting the background color

  // shape feature
  strokeWeight(4);

  // slow dow sthe drawing
  frameRate(10);
}

function draw() {
  if (line_y < (height -25)) {
    stroke(155, 89, 182);
    if (line_y > 150) {
      stroke(236, 240, 241);
    }
    line(50, line_y, width- 50, line_y);

    line_y += y_increments;
  } else {
    background(142, 68, 173);
    line_y = 50;
  }
}