// oddities
const classNames = {
    "83": 'single-plate-play',
    "65": 'drum-l-playing',
    "68": 'center-drum-playing',
    "70": 'drum-l-playing',
    "71": 'drum-l-playing',
    "72": 'drum-l-playing',
    "74": 'play-double'
}

const keys = document.querySelectorAll('.key');

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    const classN = classNames[e.keyCode];

    key.classList.add(classN);

}

function removeTransition(e) {
    if (e.propertyName === 'transform') {
        const item = this.getAttribute("data-key");
        const itemName = classNames[item];
        this.classList.remove(itemName);
    }

}

window.addEventListener('keydown', playSound);

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
});