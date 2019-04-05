let selectedFeature = undefined;

// DOM elements selecting
const face = document.querySelector('.face');

// add lisner to container, and record the pointer
document.querySelector('.container').addEventListener('click', setPointerElement)

// select the color input and add a listner
const inputColor = document.querySelector('.controls input[type="color"]');
inputColor.addEventListener('change', colorMe);


// --- METHODS ---

// function to set up the pointer element for color changes
function setPointerElement(e) {
    // make sure the element isn't the container
    if ([...e.target.classList].includes('container')) return; // exit of it's the container
    selectedFeature = e.target; // set the selector to the target element
}

// function to change the color of the element
function colorMe(e) {
    // 1. get the color value
    const color = this.value;
    // 2. get the selected element if no element was selected, color the skin
    const selected = selectedFeature || face;
    // 3. re-assign the css variable based on teh input value
    document.documentElement.style.setProperty(`--${selected.dataset.key}-color`, color);
}