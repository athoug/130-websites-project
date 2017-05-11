window.onload = function(){

  var dots =[];
  var dIndex = 0;

  // locate the elements
  var canvas = document.querySelector("canvas");
  // grabing a context
  var ctx = canvas.getContext("2d");
  var total = 2;
  var max = 100;
  var c = 0;

  // set the width and height of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var Dot = function(){
    this.x = this.random(0, canvas.width);
    this.y = this.random(0, canvas.height);
    this.size = this.random(5,10);
    this.color = "hsl(" + c + ", 50%, 50%)";

    if (c >= 360) {
      c = 0;
    }
    c += 0.05;
    this.life = 0;
    dots[dIndex] = this;
    this.id = dIndex;
    dIndex++;
  };

  //  creating a prototype for the Dot object
  Dot.prototype.random = function(min, max){
    return Math.random() * (max - min) + min;
  };

  // draw prototype
  Dot.prototype.draw = function(){
    this.x += this.random(-3, 3);
    this.y += this.random(-3, 3);
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    this.life++;
    if(this.life >= max){
      delete dots[this.id];
    }
  };

  function frames(){
    // clear with the background
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw particles
    for (var i = 0; i < total; i++) {
      new Dot();
    }

    for( var i in dots){
      dots[i].draw();
    }
    window.requestAnimationFrame(frames);
  };

  frames();
};
