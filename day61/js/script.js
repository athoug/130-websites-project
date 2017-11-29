function playString(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) {
    audio = document.querySelector(`audio[data-key="${this.getAttribute("data-key")}"]`);
    if(!audio) return; // if the ausio doesn't exist then stop the function
  }
  audio.currentTime = 0; // reset the sound
  audio.play();
}

// adding the keydown event listener to the whole page
window.addEventListener("keydown", playString);

// adding the click event listers to the strings
// grab the string classes
var strings = document.querySelectorAll(".strings");
console.log(strings);

strings.forEach(str => str.addEventListener("click", playString));
