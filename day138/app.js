// based on Javascript30 course by Wes Bos https://javascript30.com/

// select the element from the DOM
const h2 = document.querySelector('h2');
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// adjust canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// basic setup
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.globalCompositeOperation = 'lighten';

// dummy variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

// the draw methood
function draw(e) {
  if (!isDrawing) return;
  // set the hue
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // start drawing
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // move to
  ctx.lineTo(e.offsetX, e.offsetY);
  // to show it you need to clall the stroke method
  ctx.stroke();
  // update the points
  [lastX, lastY] = [e.offsetX, e.offsetY];
  // update hue
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    // flip the direction
    direction = !direction;
  }
  direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  h2.classList.add('hide');
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);