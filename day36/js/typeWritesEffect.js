var str = "hello";

var splittedArray = str.split('');
var runMe = setInterval(typeWriter, 80);

function typeWriter(){
    console.log(splittedArray);

    var x = splittedArray.shift();
    if(x == undefined){
        console.log('I am in');
        clearInterval(runMe);
    } else {
        document.getElementById('test').innerHTML += x;
    }

    console.log(x);
}
