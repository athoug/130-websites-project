var distance_left;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  stroke(random(200,256), random(200,256), random(200,256));
  strokeWeight(3);
  distance_left = random(width);
  
  line(distance_left, 0, distance_left, height);
}