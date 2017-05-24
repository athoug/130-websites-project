window.onload = function(){

  window.addEventListener('keydown', playSound);

  function playSound(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if(!audio) return; // stops the function from running all together
    audio.currentTime = 0; // in order to rewind it for if we hit the key over and over again
    audio.play();
    key.classList.add('playing');
  }
  function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip it if it's not transform
    this.classList.remove('playing');
  }

  // grab all the keys to listen for the transition end event
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));


};
