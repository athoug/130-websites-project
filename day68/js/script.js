// paths
var moon = './img/moon.svg',
    sun = './img/sun.svg',
    light = '#FDFDFD',
    dark = '#2C3C65',
    lightShadow = '#CCCCCC',
    DarkShadow = '#2E2C2C';

// Elements
var root = document.documentElement;
console.log(root);
var themeButton = document.querySelector('#theme-btn');

// cheng theme color and icon
themeButton.onclick = function () {
    if(this.getAttribute('src') === moon) {
        this.setAttribute('src', sun);
        root.style.setProperty('--bg', dark);
        root.style.setProperty('--shadow', DarkShadow);
    } else {
        this.setAttribute('src', moon);
        root.style.setProperty('--bg', light);
        root.style.setProperty('--shadow', lightShadow);
    }
}
