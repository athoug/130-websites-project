window.onload = function () {
  // grab the data
  var default1 = document.querySelector(".default");
  var blink = document.querySelector(".blink");
  var side = document.querySelector(".side-view");
  var up = document.querySelector(".up-view");

  // the eyes
  var eye1 = document.getElementById("one");
  var eye2 = document.getElementById("two");

  // add event listners for each button
  default1.addEventListener("click", function(){
    eye1.style.WebkitAnimationName = "default1";
    eye1.style.animationName = "default1";
    eye1.style.animationDuration = "1s";

    eye2.style.WebkitAnimationName = "default2";
    eye2.style.animationName = "default2";
    eye2.style.animationDuration = "1s";
  });

  blink.addEventListener("click", function(){
    eye1.style.WebkitAnimationName = "blink";
    eye1.style.animationName = "blink";
    eye1.style.animationDuration = "0.5s";

    eye2.style.WebkitAnimationName = "blink";
    eye2.style.animationName = "blink";
    eye2.style.animationDuration = "0.5s";
  });

  side.addEventListener("click", function(){
    eye1.style.WebkitAnimationName = "side1";
    eye1.style.animationName = "side1";
    eye1.style.animationDuration = "1s";

    eye2.style.WebkitAnimationName = "side2";
    eye2.style.animationName = "side2";
    eye2.style.animationDuration = "1s";
  });

  up.addEventListener("click", function(){
    eye1.style.WebkitAnimationName = "up";
    eye1.style.animationName = "up";
    eye1.style.animationDuration = "1s";

    eye2.style.WebkitAnimationName = "up";
    eye2.style.animationName = "up";
    eye2.style.animationDuration = "1s";
  });
}
