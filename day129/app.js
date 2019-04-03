const secondsTickContainer = document.querySelector('.seconds-container');
secondsTickContainer.addEventListener('transitionend', removeActive);

// get the handels
const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalHour = document.querySelector('.hour-timer');
const digitalMinute = document.querySelector('.minute-timer');

function removeActive(e) {
    if (e.propertyName !== 'background-color') return;
    e.target.classList.remove('active-second');
}

function time() {
    const now = new Date();

    const secondTick = document.querySelector(`div[data-key="${now.getSeconds()}"]`);
    secondTick.classList.add('active-second');

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;
    digitalMinute.textContent = minutes;

    const hour = now.getHours();
    const hourDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    digitalHour.textContent = hour;
}

setInterval(time, 1000);