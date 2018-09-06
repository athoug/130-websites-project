function createStar() {
  var size = (Math.random() * 20);
  var star = document.createElement('div');
  star.className = 'stars';
  star.style.width = size + "px";
   star.style.height = size + "px";
  star.style.left = (Math.random() * window.innerWidth) + "px";
  star.style.top = (Math.random() * window.innerHeight) + "px";
  document.body.appendChild(star)
}

for(var i =0; i < 100; i++) {
  createStar()
}
