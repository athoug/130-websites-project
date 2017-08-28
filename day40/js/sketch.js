var sizeof = 20;
var canvas = document.getElementsByTagName('canvas')[0];

// assign the canvas as background
function assignDivBackground() {
    dataUrl = canvas.toDataURL();
    document.getElementById('bg').style.background = 'url('+dataUrl+')';
}


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background("#5540FF");
}



function draw() {

  // draw circles
  noFill()
  stroke("#3388FF");
  ellipse(mouseX, mouseY, sizeof, sizeof);

  // update size
  sizeof = random(5, 50);

  assignDivBackground();
}
