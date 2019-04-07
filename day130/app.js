// --- Variables ---
let selectedFeature;

const body = document.querySelector('body');
const face = document.querySelector('.face');
const eyes = document.querySelectorAll('.eye');
const inputsRange = document.querySelectorAll('.controls input[type="range"]');
const inputCheckBox = document.querySelectorAll('.controls input[type="checkbox"]');
const inputRadio = document.querySelectorAll('.controls input[type="radio"]');

// --- METHODS ---
// function to set up the pointer element for color changes
function setPointerElement(e) {
  // make sure the element isn't the container
  if ([...e.target.classList].includes('container')) return; // exit of it's the container
  selectedFeature = e.target; // set the selector to the target element
}

// function to change the color of the element
function colorMe() {
  // 1. get the color value
  const color = this.value;
  // 2. get the selected element if no element was selected, color the skin
  const selected = selectedFeature || face;
  // 3. re-assign the css variable based on teh input value
  document.documentElement.style.setProperty(`--${selected.dataset.key}-color`, color);
}

// function to change the faces dismentions
function changeDismentions() {
  const suffix = this.dataset.suffix || '';
  // get the changed value [this.value] | get the name [this.name] of the variable to be changed
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

// function to handel checkbox events
function checkBoxHandler() {
  const display = !this.checked ? 'none' : 'display';
  document.documentElement.style.setProperty(`--${this.name}`, display);
}

// function to handle radio buttons
function radioButtonHandler() {
  if (this.value === 'full') {
    document.documentElement.style.setProperty(`--${this.name}`, 'display');
    document.documentElement.style.setProperty(`--${this.name}-front`, 'display');
  } else if (this.value === 'bold') {
    document.documentElement.style.setProperty(`--${this.name}-front`, 'none');
    document.documentElement.style.setProperty(`--${this.name}`, 'none');
  } else {
    document.documentElement.style.setProperty(`--${this.name}-front`, 'none');
    document.documentElement.style.setProperty(`--${this.name}`, 'display');
  }
}

// function to track eye movment
function eyeMovment(e) {
  // note: This function is based on the pen my Jeremy [https://codepen.io/J-Roel/pen/wWGNQN?editors=0010]
  eyes.forEach((eye) => {
    const x = (eye.getBoundingClientRect().left) + (eye.getBoundingClientRect().width / 2);
    const y = (eye.getBoundingClientRect().top) + (eye.getBoundingClientRect().height / 2);
    const xPage = (e.pageX - x) / 6;
    const yPage = (e.pageY - y) / 5.5;

    eye.style.setProperty('transform', `scale(var(--eye-scale)) translateX(${xPage}%) translateY(${yPage}%)`);
  });
}

// add lisner to container, and record the pointer
document.querySelector('.container').addEventListener('click', setPointerElement);

// select the color input and add a listner
const inputColor = document.querySelector('.controls input[type="color"]');
inputColor.addEventListener('change', colorMe);

inputsRange.forEach(input => input.addEventListener('change', changeDismentions));
inputCheckBox.forEach(input => input.addEventListener('click', checkBoxHandler));
inputRadio.forEach(input => input.addEventListener('click', radioButtonHandler));
body.addEventListener('mousemove', eyeMovment);
