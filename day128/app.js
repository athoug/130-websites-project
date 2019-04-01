// play sound function
function playSound(e) {
    // grab the elements based on the key pressed
    const soundClip = document.querySelector(`audio[data-key="${e.keyCode}"]`) || document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    const btn = document.querySelector(`.key[data-key="${e.keyCode}"]`) || document.querySelector(`.key[data-key="${e.target.dataset.key}"]`);

    if (!soundClip) return; // if the audio doesn't exist just leave, leave...

    soundClip.currentTime = 0; // reset the audio
    soundClip.play();

    // add the animation class
    btn.classList.add('playing');
}

function removeAnimation(e) {
    // if the property isn't transition just leave
    if (e.propertyName != 'transform') return;
    // otherwise remove the playing class from the element
    e.target.classList.remove('playing');
}

// setting an event lister 'keydown' to the window object
window.addEventListener('keydown', playSound);

// selecting the keys and setting the 'transitionend' listener
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeAnimation));

// selecting the key container and setting the 'click' listener
const keysContainer = document.querySelector('.keys');
keysContainer.addEventListener('click', playSound);
keysContainer.addEventListener('transitionend', removeAnimation);