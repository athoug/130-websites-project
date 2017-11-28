function playString(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return; // if the ausio doesn't exist then stop the function
  audio.currentTime = 0; // reset the sound
  audio.play();
}

window.addEventListener("keydown", playString);
