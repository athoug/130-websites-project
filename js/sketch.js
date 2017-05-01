function setup() {
  //var canvas = createCanvas(window.innerWidth,500);
  var x = (windowWidth - width)/2;
  var y = (windowHeight - height)/2;
  canvas.position(x,0);
  // move canvas inside div
  canvas.parent("canvasDiv");

  background(255,0,200);
}
