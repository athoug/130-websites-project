function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  stroke(random(255), 0, 0); // RGB colors
  line(width / 2, height / 2, random(width), random(height));
}