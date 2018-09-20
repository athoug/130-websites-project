var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var today = new Date();

document.getElementById('today').textContent = today.getDate();

document.getElementById('month').textContent = months[today.getMonth()];

document.getElementById('year').textContent = today.getFullYear();
