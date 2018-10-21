const keyboard = Array.from(document.querySelectorAll(".key"));

keyboard.forEach(key => key.addEventListener("click", playAudio));
window.addEventListener("keydown", playAudio);

// adding UX with key presses
keyboard.forEach(key => key.addEventListener('transitionend', removeTransition));


function playAudio(e) {
    let audio = document.querySelector(`audio[data-key=${e.key}]`);
    let key = document.querySelector(`div[data-key=${e.key}]`);
    console.log(e);
    if(!audio) {
        audio = document.querySelector(`audio[data-key=${this.getAttribute("data-key")}]`);
        key = document.querySelector(`div[data-key=${this.getAttribute("data-key")}]`);
        if (!audio) return;
    }

    // add effect for key being pressed
      if(key.classList.contains('keys-white')) {
        key.classList.add('white-keys-clicked');
      } else if (key.classList.contains('keys-black')) {
        key.classList.add('black-keys-clicked');
      }

    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    console.log(e.propertyName);
    if (e.propertyName !== 'background-color') return;
    e.target.classList.remove('white-keys-clicked');
    e.target.classList.remove('black-keys-clicked');
}
