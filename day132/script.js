// Initialize variables and select the DOM elements
const cube = document.querySelector('.cube');
const radioGroup = document.querySelector('.radio-group');
const checkSpin = document.querySelector('.spin-cube-checkbox');
let currentClass = '';

// function to roll the cube
function changeSides() {
  cube.classList.remove('is-spinning'); // remove the spining animation
  checkSpin.checked = false; // remove checked state

  const checkedSide = radioGroup.querySelector(':checked'); // select the checked radio
  const showClass = `show-fact-${checkedSide.value}`; // store the value of the class

  // make sure to remove the class of the previouse face if it exists
  if (currentClass) {
    cube.classList.remove(currentClass);
  }

  cube.classList.add(showClass); // add the class to show the side
  currentClass = showClass; // reserve the curetn class to change later when a change happens
}

// function to spin the cube
function spin() {
  cube.classList.toggle('is-spinning'); // toggle the css animiation based on the click
}

// set the initial side
changeSides();

// add event listner to the radio buttons and checkbox
radioGroup.addEventListener('change', changeSides);
checkSpin.addEventListener('change', spin);
