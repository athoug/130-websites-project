var counter = 0;
var lableStart = '<label id="item-',
labelEnd = '">',
labelClosing = '</label>',
spanOpen = '<span class="check"><input type="checkbox" class="radio-button" id="item-',
spanMid = '" onclick="crossOut(\'item-',
spanClose = '></span>';


window.onload = function(){
    getTodaysDate();
};


function getTodaysDate(){
    var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    var today = new Date();

    var date = today.getDate();
    var year = today.getFullYear();

    console.log(date + '  ' + year + "  " + days[today.getDay()] + "   " + month[today.getMonth()]);
    document.getElementById('date').innerHTML = date;
    document.getElementById('month').innerHTML = month[today.getMonth()];
    document.getElementById('year').innerHTML = year;
    document.getElementById('day').innerHTML = days[today.getDay()];
}


function addItem(event, status){

    var toDo = document.getElementById('todos').value;
    if((toDo.length > 0 && status) || (toDo.length > 0 && event.keyCode == 13) ){
        var newToDo = document.createElement('li');
        newToDo.innerHTML = '<label id="label-' + counter +'">'+ toDo +'</label>' + ' <div class="checkboxFour" onclick="crossOut(\'label-' + counter + '\', \'item-' + counter +'\')"> <input type="checkbox" value="1" id="item-' + counter + '"><label for="item-' + counter + '"></label></div>';
        document.getElementById('the-to-do-list').appendChild(newToDo);
        document.getElementById('todos').value= "";
        counter++;
    }

}

function crossOut(labelid, clickid){
    var check = document.getElementById(clickid).checked;

    if(check){
        document.getElementById(labelid).style.color = '#ddd';
    }

    if(!check){
        document.getElementById(labelid).style.color = '#777';
    }
}
