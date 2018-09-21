let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let idNmae = 'day-';
let today = new Date();
let marker = document.createElement('div');
marker.setAttribute('class', 'active');
    
document.getElementById('today').textContent = today.getDate();

document.getElementById('month').textContent = months[today.getMonth()];

document.getElementById('year').textContent = today.getFullYear();

document.getElementById(idNmae + today.getDate()).appendChild(marker);
