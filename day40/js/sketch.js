var circles = [];
var canvas = document.getElementsByTagName('canvas')[0];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background("#130c22");
}


function draw() {

  // craete a variable that holds the circle object
  var cir = new Circle(mouseX, mouseY);

  // add variable to array
  circles.push(cir);

  // updated cricle positions
  for (var i = 0; i < circles.length; i++) {
      circles[i].drawCircle();
      circles[i].updateCircle();
  }

  // uupdate the div background
  assignDivBackground();
}

// circle consturctor
function Circle(x, y) {
    this.x = x;
    this.y = y;
    this.color = "#372261"; //'rgb(51,136,255)';
    // this.alpha = random(0.8, 2);
    this.size = random(5, 50);

    this.drawCircle = function () {
        // draw circles
        noFill()
        stroke(this.color);
        ellipse(this.x, this.y, this.size, this.size);
    }
    this.updateCircle = function () {
        var offset = random(-1, 1);
        this.x += offset;
        this.y += offset;
    }
}

// assign the canvas as background
function assignDivBackground() {
    dataUrl = canvas.toDataURL();
    document.getElementById('bg').style.background = 'url('+dataUrl+')';
}
