const colors = ["#fff", "#FDD9CB", "##FBE48C", "#CE6461", "#8DB4D6"];

function createPoka() {
    let size = (Math.random() * 20);
    let circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.width = size + "px";
    circle.style.height = size + "px";
    circle.style.left = (Math.random() * window.innerWidth) + "px";
    circle.style.top = (Math.random() * window.innerHeight) + "px";
    circle.style.background = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(circle)
}

for (var i = 0; i < 100; i++) {
    createPoka()
}