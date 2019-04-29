// random color fucntion from stackoverflow: https://stackoverflow.com/a/17373688
function randomColor(brightness) {
  function randomChannel(brightness) {
    var r = 255 - brightness;
    var n = 0 | ((Math.random() * r) + brightness);
    var s = n.toString(16);
    return (s.length == 1) ? '0' + s : s;
  }
  return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}

// function to generatethe pixel heart shape based on the grid
function heartGenerator(heart, grid) {
  for (let x = 0; x < heart.length; x++) {
    for (let y = 0; y < heart[x].length; y++) {
      const col = grid[x].querySelectorAll('.col');
      if (heart[x][y] === 'x') {
        col[y].style.background = randomColor(80);
      }
    }
  }
}

// construct the heart shape
const heart = [
    ['', '', 'x', 'x', 'x', '', '', '', 'x', 'x', 'x', '', ''],
   ['', 'x', 'x', 'x', 'x', 'x', '', 'x', 'x', 'x', 'x', 'x', ''],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
   ['', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', ''],
    ['', '', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '', ''],
     ['', '', '', 'x', 'x', 'x', 'x', 'x', 'x', 'x', '', '', ''],
      ['', '', '', '', 'x', 'x', 'x', 'x', 'x', '', '', '', ''],
       ['', '', '', '', '', 'x', 'x', 'x', '', '', '', '', ''],
        ['', '', '', '', '', '', 'x', '', '', '', '', '', ''],
];
const grid = document.querySelectorAll('.row');

// add a time interval
setInterval(function() {
  heartGenerator(heart, grid)
}, 200)