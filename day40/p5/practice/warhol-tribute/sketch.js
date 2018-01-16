var athoug;

function setup() {
  athoug = loadImage("asset/athoug-thresh.jpg"); // load the image
  createCanvas(900, 900);
}

function draw() {
  // first row of images
  // add a tint to the image
  tint(map(mouseX,0, width, 100, 255 ), 0, 0);
  image(athoug, 0, 0, 300, 300); // draw the image

  // add a tint to the image
  tint(0, 0, map(mouseY,0, height, 200, 255 ));
  image(athoug, 300, 0, 300, 300); // draw the image
  
   // add a tint to the image
  tint(0, map(mouseX,0, width, 150, 255 ), 0);
  image(athoug, 600, 0, 300, 300); // draw the image
  
  // second row of images
  // add a tint to the image
  tint(map(mouseY,0, height, 100, 255 ), map(mouseX,0, width, 100, 200 ), 0);
  image(athoug, 0, 300, 300, 300); // draw the image

  // add a tint to the image
  tint(map(mouseX,0, width, 100, 200 ), 0, map(mouseY,0, height, 100, 255 ));
  image(athoug, 300, 300, 300, 300); // draw the image
  
   // add a tint to the image
  tint(0, map(mouseY,0, height, 100, 255 ), map(mouseX,0, width, 100, 200 ));
  image(athoug, 600, 300, 300, 300); // draw the image
  
  // third row of images
  // add a tint to the image
  tint(map(mouseY,0, height, 100, 255 ), 0, 200);
  image(athoug, 0, 600, 300, 300); // draw the image

  // add a tint to the image
  tint(50, 200, map(mouseY,0, height, 100, 255 ));
  image(athoug, 300, 600, 300, 300); // draw the image
  
   // add a tint to the image
  tint(100, map(mouseY,0, height, 100, 255 ), 100);
  image(athoug, 600, 600, 300, 300); // draw the image
  
}