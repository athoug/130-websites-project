// select the DOM elements
// theme elements
const body = document.querySelector('body');
const container = document.querySelector('.container');
const lightSecondsContainer = document.querySelector('.light-seconds');
const darkSecondsContainer = document.querySelector('.dark-seconds');
const clock = document.querySelector('.clock');
const toggleSpanElement = document.querySelector('.toggle-circle');
const footer = document.querySelector('footer');
// clock elements
const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalHour = document.querySelector('.hour-timer');
const digitalMinute = document.querySelector('.minute-timer');
const amContainer = document.querySelector('.am');
const pmContainer = document.querySelector('.pm');

let secondsCounterDegree = 0;
let minuteCounterDegree = 0;
let hourCounterDegree = 0;


// select the button and listen to event
const btnToggler = document.querySelector('.theme-toggler button');
btnToggler.addEventListener('click', toggleTheme);
// get the tickers and add the event lister to it
const secondsTickContainer = document.querySelector('.light-seconds');
secondsTickContainer.addEventListener('transitionend', removeActive);

document.querySelector('.year').textContent = new Date().getFullYear();

setInterval(time, 1000);


// --- methods ---
function removeActive(e) {
    if (e.propertyName !== 'background-color') return;
    e.target.classList.remove('active-second');
}

function time() {
    // get the current time
    const now = new Date();

    // based on the curretn second light up the active second
    const secondTick = document.querySelector(`div[data-key="${now.getSeconds()}"]`);
    secondTick.classList.add('active-second');

    // get the second and convert it to degrees
    setSeconds(now);

    // get the minute and convert it to degrees
    setMinutes(now);

    // get the hour and convert it to degrees
    setHour(now);

    // set up the view of am and pm
    amPmSetter(now);
}

// function to setup the seconds
function setSeconds(now) {
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    // if (seconds == 0) secondsCounterDegree += 360
    secondsHand.style.transform = `rotate(${secondsDegree + secondsCounterDegree}deg)`;
}

// function to setup the minutes
function setMinutes(now) {
    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    // if (seconds == 0 ) minuteCounterDegree += 360;
    minutesHand.style.transform = `rotate(${minutesDegree + minuteCounterDegree}deg)`;
    digitalMinute.textContent = `${minutes < 10 ? '0' : ''}${minutes}`;
}

// function to set the hour
function setHour(now) {
    const hour = now.getHours();
    const hourDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    digitalHour.textContent = hour;
}

// function to set the am and pm
function amPmSetter(now) {
    if (now.toLocaleTimeString().includes('AM')) {
        pmContainer.classList.remove('view-time-am-pm');
        amContainer.classList.add('view-time-am-pm');
    } else {
        amContainer.classList.remove('view-time-am-pm');
        pmContainer.classList.add('view-time-am-pm');
    }
}

// function to toggle the theme
function toggleTheme() {
    // set toggle button
    toggleSpanElement.classList.toggle('toggle-circle-light');
    toggleSpanElement.classList.toggle('toggle-circle-dark');

    this.classList.toggle('btn-dark');
    this.parentNode.classList.toggle('btn-dark-container');

    // start theme is light so we first grab the containers that have the dark styling
    // as such: body toggler
    body.classList.toggle('light');
    body.classList.toggle('dark');

    footer.classList.toggle('light-footer');
    footer.classList.toggle('dark-footer');

    // container toggler
    container.classList.toggle('light-container');
    container.classList.toggle('dark-container');

    // seconds ticker
    lightSecondsContainer.classList.toggle('hide');
    darkSecondsContainer.classList.toggle('hide');

    // clock face
    clock.classList.toggle('light-clock');
    clock.classList.toggle('dark-clock');

    // hour handle
    hourHand.classList.toggle('dark-handle');

}

