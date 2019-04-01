// play sound function
function playSound(e) {
    // grab the elements based on the key pressed
    const soundClip = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const btn = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!soundClip) return; // if teh audio doesn't exist just leave, leave...

    soundClip.currentTime = 0; // reset the audio
    soundClip.play();

    // add the animation class
    btn.classList.add('playing');
}

function removeAnimation(e) {
    // if the property isn't transition just leave
    if (e.propertyName != 'transform') return;
    // otherwise remove the playing class from the element
    this.classList.remove('playing');
}

// setting an event lister to the wndow object
window.addEventListener('keydown', playSound);

// selecting the keys
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeAnimation));