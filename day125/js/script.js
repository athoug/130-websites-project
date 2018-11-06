const secondsHand = document.querySelector('.seconds-hand');
const minuteHand = document.querySelector('.minutes-hand');
const hourHand = document.querySelector('.hours-hand');

function setTime(itteration) {
    const now = new Date();

    const seconds = ((now.getSeconds() / 60) * 360) + 90;
    const minutes = ((now.getMinutes() / 60) * 360) + 90;
    const hours = ((now.getHours() / 12) * 360) + 90;

    secondsHand.style.transform = `rotate(${seconds}deg)`;
    minuteHand.style.transform = `rotate(${minutes}deg)`;
    hourHand.style.transform = `rotate(${hours}deg)`;

}

setInterval(setTime, 1000);