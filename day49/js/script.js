
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("pickedColor");
var messageDispay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var modeBtn = document.querySelectorAll(".mode");

var numberOfSquares = 6;
var colors = [];
var pickedColor;

init();


resetBtn.addEventListener("click", function(){
  reset();
});


function init() {
  // add mode button listners
  setUpModeButtons();

  setupSquares();

  reset();
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    // add click listners to sqyuares
    squares[i].addEventListener("click", function(){
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // compare color to picked color
      if(clickedColor == pickedColor) {
        messageDispay.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetBtn.textContent = "Play Again?";
      } else {
        // fade it out
        this.style.backgroundColor = "#fff";
        messageDispay.textContent = "Try Again";
      }
    });
  };
}

function setUpModeButtons() {
  for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click",function() {
      modeBtn[0].classList.remove("selected");
      modeBtn[1].classList.remove("selected");
      this.classList.add("selected");

      // figure out how many squares to show
      if (this.textContent === "Easy") {
        numberOfSquares = 3;
      } else {
        numberOfSquares = 6;
      }
      // pick new colors
      // pick a new picked color
      // update page to reflect changeColors
      reset();
    });
  }
}
function reset() {
  //generate new colors
  colors = generateRandomColors(numberOfSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change color display to match picked color
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  resetBtn.textContent = "New Colors";
  messageDispay.textContent = "";

  // change colors of squares in page
  for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
}

function changeColors(color){
  // loop through all squares change each color to match given color
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randomColor() {
  // pick a red from 0 to 255
  var r = Math.floor(Math.random() * 256);
  // pick a green from 0 to 255
  var g =  Math.floor(Math.random() * 256);
  // pick a blue from 0 to 255
  var b =  Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generateRandomColors(num) {
  // make an array
  var arr = [];

  // add num random colors
  for (var i = 0; i < num; i++) {
    // get a random color and push into array
    arr.push(randomColor());
  }

  // return array
  return arr;
}
