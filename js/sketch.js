window.onload = function(){
  // Safari 3.0+ "[object HTMLElementConstructor]"
  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
  var canvas = document.createElement("canvas");
  var header = document.getElementById("header");
  var ctx = canvas.getContext("2d");
  var color = "#000";
  var idle = null;
  var mousePosition;

  ctx.scale(2,2);

  canvas.width = window.innerWidth * 2;
  canvas.height = 500;

  canvas.style.width = window.innerWidth+"px";
  canvas.style.height = "500px";
  canvas.style.display = 'block';

  ctx.fillStyle = "#222";
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = color;

  var dotNum = Math.min((window.innerWidth/2),600);
console.log(dotNum)
var mousePosition = { x: 30 * canvas.width / 100, y: 30 * canvas.height / 100 },
    //dots = { nb: 600, distance: 80, d_radius: 3000, array: [] };
dots = { nb: dotNum, distance: 80, d_radius: 3000, array: [] };

function Dot(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = -.5 + Math.random();
    this.vy = -.5 + Math.random();

    this.radius = Math.random();
}

Dot.prototype = {
    create: function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fill();
    },

    animate: function(){

        for(var i = 0, dot=false; i < dots.nb; i++){

            dot = dots.array[i];

            if(dot.y < 0 || dot.y > canvas.height){
                dot.vx = dot.vx;
                dot.vy = - dot.vy;
            }else if(dot.x < 0 || dot.x > canvas.width){
                dot.vx = - dot.vx;
                dot.vy = dot.vy;
            }
            dot.x += dot.vx;
            dot.y += dot.vy;
        }
    },

    line: function(){
        for(var i = 0; i < dots.nb; i++){
            for(var j = 0; j < dots.nb; j++){
                i_dot = dots.array[i];
                j_dot = dots.array[j];

                if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
                    if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
                        ctx.beginPath();
                        ctx.moveTo(i_dot.x, i_dot.y);
                        ctx.lineTo(j_dot.x, j_dot.y);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
        }
    }
};

function createDots(){
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#222";
    for(var i = 0; i < dots.nb; i++){
        dots.array.push(new Dot());
        dot = dots.array[i];

        dot.create();
    }

    dot.line();
    dot.animate();

    // if ( || (navigator.userAgent.indexOf("Firefox") != -1 ))) {
    //   header.style.background = '#222';
    // } else {
    //   header.style.background = 'url(' + canvas.toDataURL() + ')';
    // }

    if(window.innerWidth > 400) {
      if(browser.includes("Safari")){
        // alert('Safari');
        header.style.background = '#222';
      } else {
        header.style.background = 'url(' + canvas.toDataURL() + ')';
      }
    } else {
      header.style.background = '#222';
    }
}

idle = setInterval(createDots, 1000/80);
};

// followed the project in code pen
// https://codepen.io/elifitch/pen/hasfq
