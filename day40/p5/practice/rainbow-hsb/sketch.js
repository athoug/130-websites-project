var half_width;
var circle_height;
var circle_size;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background("#D7DEF0");
  noFill();

  // get variable values
  circle_height = height; // to move the circle down
  half_width = (width / 2);
  circle_size = width;

  // change the color mode
  colorMode(HSB);
}

function draw() {
  strokeWeight(random(3, 10));
  stroke(random(255), 100, 255); // random stroke colors for the rainbow using HSB [hue, saturation and brightness]

  circle_size = random((width-100), (width-30)); // having random sizes for our rainbow in order to see diffrent strokes

  ellipse(half_width, circle_height+50, circle_size, circle_size);

}