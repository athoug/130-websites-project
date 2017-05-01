// select the element from the DOM
var elem = document.getElementsByClassName('date');

//use the date object to get todays year
var y = new Date();
var year = y.getFullYear();

//assign the value using dom
for(var i =0; i < elem.length; i++)
{
    elem[i].innerHTML = year;
}
