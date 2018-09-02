const root = document.documentElement;
const range = document.querySelector('.booth-slider');
const inputs = document.querySelectorAll('.cubes > input');

// as the slider value is changed, handle that event
range.addEventListener('input', handleSlider);

// as the value of input changes, handle that event
inputs.forEach(function (input) {
  input.addEventListener('input', handleInputChange);
});

function handleSlider(e) {
  let value = e.target.value;
  root.style.setProperty('--slider', value);
}

function handleInputChange(e) {
  let value = e.target.value;
  let inputId = e.target.parentNode.id;
  let inputBG = '--'+ inputId;
  root.style.setProperty(inputBG, value)
}
