var circles = [];

function onKeyDown(event) {
  // a random point
  var maxPoint = new Point(view.size.width, view.size.height); // gives me a (x,y) point of the maximum width and height of the window
  var randomPoint = Point.random(); // gives me a random point betwee 0 and 1
  var point = maxPoint * randomPoint; // this is how to get a random point betweet 0 and the max

  // a random color
  var r = Math.random()
  var g = Math.random()
  var b = Math.random()
  circles.push(new Path.Circle(point, 10).fillColor = new Color(r, g, b));

}

// var x = 0, y = 0, radius = 10;
// for (var i = 0; i < 1400; i+=100) {
//   for (var j = 0; j < 1400; j+= 100) {
//     var r = Math.random()
//     var g = Math.random()
//     var b = Math.random()
//     new Path.Circle(new Point(x+i, y+j), radius).fillColor = new Color(r, g, b);
//   }
// }

var animatedCircle = new Path.Circle(new Point(300,300), 100);
animatedCircle.fillColor = "red";

function onFrame(event) {
  for (var i = 0; i < circles.length; i++) {
    // circles[i].fillColor.hue += 1;
    // circles[i]
  }
  animatedCircle.fillColor.hue += 1;
  animatedCircle.scale(.91);
}
