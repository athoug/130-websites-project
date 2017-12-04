function playAudio(e) {
  // get the audio and key source
  let audio = document.querySelector(`audio[data-keys="${e.keyCode}"]`);
  let key = document.querySelector(`div[data-keys="${e.keyCode}"]`);

  if(!audio){
    audio = document.querySelector(`audio[data-keys="${this.getAttribute("data-keys")}"]`);
    key = document.querySelector(`div[data-keys="${this.getAttribute('data-keys')}"]`);
    if(!audio) return; // if the audio id null return
  }

  // add effect for key being pressed
  if(key.classList.contains('white-keys')) {
    key.classList.add('white-keys-clicked');
  } else if (key.classList.contains('black-keys')) {
    key.classList.add('black-keys-clicked');
  }

  audio.currentTime = 0; // reset the time
  audio.play();

  console.log(e);
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('white-keys-clicked');
  e.target.classList.remove('black-keys-clicked');
}
// get the keys
let keys = Array.from(document.querySelectorAll('.keys'));

// attach a click event listener to all of the Keys
keys.forEach(key => key.addEventListener('click', playAudio));
// add a keydown event listener to the window object for keyboard input
window.addEventListener('keydown', playAudio);

// adding UX with key presses
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
