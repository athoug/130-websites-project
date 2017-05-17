window.onload = function(){

  // before drawing on canvas I need to do a couple of things
  // 1. get a refrence to the canvas
  var canvas = document.getElementById("paper");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  // 2. get refrence ot the context [in order to draw]
  var ctx = canvas.getContext("2d");

  // fillstyle is basically chosing teh paint bucket tool
   ctx.fillStyle = "black";
  //  takes four arguments the first two is the position (x,y)
  // from the top left corder
  // while the other two are the width and heigh
   ctx.fillRect(0,0,canvas.width, canvas.height);

   ctx.fillStyle = "pink";
   ctx.fillRect(20,20,50,50);

   ctx.strokeStyle = "white";
   ctx.lineWidth = 3;
   ctx.strokeRect(30,30,50,50);

  //  drawing lines
  ctx.strokeStyle = "#7dc8e5";
  // to draw a line i need to begin a path
  ctx.beginPath();
  // the move to is the strting point of the drawing potiotion
  ctx.moveTo(100, 100);
  // move the line end pint to the line to postion
  ctx.lineTo(200,200);
  // I can keep drawing lines it doesn't need to only be two points
  ctx.lineTo(200,100);
  ctx.lineTo(100, 200);
  // to close the path I can just say
  ctx.closePath();
  // to render the line i need to call the stroke function
  ctx.stroke();
  // since it's a closed path, we can fill it
  ctx.fillStyle = "#7dc8e5";
  ctx.fill();

  // we can draw in the canvas by
  ctx.font = "50px Helvetica";
  ctx.fillText("Yo", 250,250);

  // drawing a circle
  // just as with lines we need to start a path
  ctx.beginPath();
  // I can use move to with teh circle [optional]
  ctx.moveTo(200,300);
  // then draw an arc
      // (x  , y ,radius, starting point, ending point [along the circumphrance of teh circle], direction )
  // to draw a circle I start at 0 to Math.PI * 2
  // ctx.arc(200,300, 50, 5, Math.PI * 2, false);
  ctx.arc(200,300, 50, 5, Math.PI * 2, false); // these starting points ar in Radians. The last perameter is the directon it would take ariund the circumfrance in otehr words clock wise or counter clockwise
  ctx.fillStyle = "#fff";
  ctx.fill();


  var posX = 0;
  var posY = 0;
  var diff = 1;
  // to animate one of these we need the JS function
  // setInterval()
  setInterval(function(){
    posX += diff;
    posY = Math.random() * canvas.height;
    if (posX > canvas.width || posX < 0) {
      diff *= -1;
    }
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0,0,canvas.width, canvas.height);

    // move circle
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(posX,posY, 50, 0, Math.PI * 2, false);
    ctx.fill();

  }, 30);
};
