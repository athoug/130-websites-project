window.onload = function() {

  // grab the hands
  const secondHand = document.querySelector('.second-hand');
  const minuteHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    // seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    // minutes
    const minutes = now.getMinutes();
    const minutesDegree = ((minutes/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
    console.log(minutes);

    // hours
    const hours = now.getHours();
    const hoursDegree = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    console.log(hours);
  }

  setInterval(setDate, 1000);
};
