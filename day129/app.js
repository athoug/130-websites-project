// get the handels
const secondsHand = document.querySelector('.second-hand');

function time() {

    const now = new Date();
    const secondTick = document.querySelector(`div[data-key="${now.getSeconds()}"]`);
    secondTick.classList.add('active-second');
    console.log(now.getSeconds());
}

setInterval(time, 1000);