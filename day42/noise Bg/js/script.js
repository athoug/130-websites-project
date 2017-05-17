var c = document.createElement("canvas");
var ctx = c.getContext("2d");
var cw = c.width = 200;
var ch = c.height = 200;

setInterval( function(){
  for (var x = 0; x < cw; x++) {
    for (var y = 0; y < ch; y++) {
      ctx.fillStyle = "hsl(0, 0%, " + (100 - (Math.random()*15)) + "%)";
      ctx.fillRect(x,y,1,1);
    }
  }
  document.body.style.background = 'url(' + c.toDataURL() + ')';

}, 500);
