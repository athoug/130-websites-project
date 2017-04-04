window.onload = function(){
var turn = 1;

var grid = document.getElementsByClassName('box');

var drawTurn = function(){
  if(this.textContent){
    return null;
  }
  if(turn%2 == 0){
    this.innerHTML += "O";
    this.className += " os";
  } else{
    this.innerHTML += "X";
    this.className += " xs";
  }
  turn += 1;
};

for(var i = 0; i < grid.length; i++){
    grid[i].addEventListener("click", drawTurn, false);
}

}
