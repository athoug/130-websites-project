// selecting the elements from the dom
var bigCircles = document.querySelectorAll('.first-lvl');
var smallCircles = document.querySelectorAll('.second-lvl');
//  setting the moving variables
var moveBig = 0;
var moveSmall = 0
var move;

// function to move/ rotate the element based on the size
function moveManual(el, size) {
  if(size === 'big') {
    move = moveBig;
  } else {
    move = moveSmall;
  }

  el.style.transform = `rotate(${move}deg)`;
  moveSmall += .5;
  moveBig += .1;
}

// seting a time intreval for every element in the node both big and small circles
bigCircles.forEach(big => {
  setInterval(function() {
    moveManual(big, "big");
  }, 60);
});

smallCircles.forEach(small => {
  setInterval(function() {
    moveManual(small, "small");
  }, 50);
});
