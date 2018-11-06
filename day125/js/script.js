const secondsHand = document.querySelectorAll('.seconds-hand');
const minuteHand = document.querySelectorAll('.minutes-hand');
const hourHand = document.querySelectorAll('.hours-hand');

function setTime(itteration, type, element) {
    const now = new Date();

    const seconds = ((now.getSeconds() / 60) * 360) + 90;
    const minutes = (((now.getMinutes() + itteration) / 60) * 360) + 90;
    const hours = (((now.getHours() + itteration) / 12) * 360) + 90;

    if (type === 's') element.style.transform = `rotate(${seconds}deg)`;
    if (type === 'm') element.style.transform = `rotate(${minutes}deg)`;
    if (type === 'h') element.style.transform = `rotate(${hours}deg)`;

}

for (let index = 0; index < secondsHand.length; index++) {
    setInterval(function (params) {
        setTime(index, 's', secondsHand[index]);
        setTime(index, 'm', minuteHand[index]);
        setTime(index, 'h', hourHand[index]);
    }, 1000);
}