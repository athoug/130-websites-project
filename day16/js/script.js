// defult varables
var numberOne = '';
var operation = '';
var numberTwo = '';
var total = '';

// trigger values
var operationClicked = false;
var secondOpp = false;
var equalClicked = false;
var num1active = true;
var num2active = false;

// DOM varables
var numOneContainer = document.getElementById('number1');
var operationContainer = document.getElementById('operation');
var numTwoContainer = document.getElementById('number2');
var resultContainer = document.getElementById('result');



function grabNumber(id) {

    if(!operationClicked){
        numberOne += document.getElementById(id).textContent;
        if(document.body.clientWidth > 750) {
            numOneContainer.innerHTML = numberOne;
        } else {
            resultContainer.innerHTML = numberOne;
        }

    } else {
        if(!equalClicked){
            num1active = false;
            num2active = true;
            numberTwo += document.getElementById(id).textContent;
            secondOpp = true;

            if(document.body.clientWidth > 750) {
                numTwoContainer.innerHTML = numberTwo;
            } else {
                resultContainer.innerHTML = numberTwo;
            }
        }
    }

}

function operationGrab(id) {
    operationClicked = true;
    operation = document.getElementById(id).textContent;
    operationContainer.innerHTML = operation;
    if (secondOpp) {
        num1active = true;
        num2active = false;
        equalClicked = false;
        numberOne = total;
        numberTwo = '';
        total = '';


        if(document.body.clientWidth > 750) {
            numOneContainer.innerHTML = numberOne;
            numTwoContainer.innerHTML = numberTwo;
            resultContainer.innerHTML = total;
        } else {
            resultContainer.innerHTML = numberOne;
        }
    }
}

function clearContent() {
    numberOne = '';
    operation = '';
    numberTwo = '';
    total = '';

    operationClicked = false;
    secondOpp = false;
    equalClicked = false;
    num1active = true;
    num2active = false;

    numOneContainer.innerHTML = '';
    operationContainer.innerHTML = '';
    numTwoContainer.innerHTML = '';
    resultContainer.innerHTML = '';

}

function calculateResult() {
    equalClicked = true;
    console.log(numberOne);
    if(typeof(numberOne) == 'string'){
        numberOne = cleanUp(numberOne);
        console.log(numberOne);
    }
    if(typeof(numberTwo) == 'string'){
        numberTwo = cleanUp(numberTwo);
    }

    operation = operation.trim();
    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);

    if (operation == '+') {
        console.log('add');
        total = add(numberOne, numberTwo);
    }

    else if (operation == '-') {
        console.log('min');
        total = sub(numberOne, numberTwo);
    }

    else if (operation == 'x') {
        console.log('mult');
        total = mult(numberOne, numberTwo);
    }

    else if (operation == '/') {
        console.log('div');
        total = div(numberOne, numberTwo);

    }

    else if (operation == '√') {
        console.log('squrt');
        total = squareRoot(numberOne).toFixed(2);
    }

    resultContainer.innerHTML = total;

}

function add(x, y) {
    console.log(x + ' + ' + y);
    return (x + y).toFixed(2);
}

function sub(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

function div(x, y) {
    var res = (x/y);
    return res.toFixed(2);
}

function percentage() {
    if(num1active){
        numberOne = cleanUp(numberOne);
        numberOne = (parseFloat(numberOne)/100).toFixed(2);

        if(document.body.clientWidth > 750) {
            numOneContainer.innerHTML = numberOne;
        } else {
            resultContainer.innerHTML = numberOne;
        }
    } else {
        numberTwo = cleanUp(numberTwo);
        numberTwo = (parseFloat(numberTwo)/100).toFixed(2);


        if(document.body.clientWidth > 750) {
            numTwoContainer.innerHTML = numberTwo;
        } else {
            resultContainer.innerHTML = numberTwo;
        }
    }
}

function signValue(){
    console.log('hello');
    console.log(num1active);

    if(num1active){
        console.log(Math.sign(numberOne));
        if( Math.sign(numberOne) == 1){
            if(typeof(numberOne)=='string'){
                numberOne = cleanUp(numberOne);
                numberOne = '-' + numberOne;
            } else {
                numberOne = -numberOne;
            }
        } else {
            if(typeof(numberOne)=='string'){
                numberOne = cleanUp(numberOne);
                numberOne = numberOne.replace('-', '');
            } else {
                numberOne = Math.abs(numberOne);
            }
        }

        if(document.body.clientWidth > 750) {
            numOneContainer.innerHTML = numberOne;
        } else {
            resultContainer.innerHTML = numberOne;
        }

    } else{

        console.log(Math.sign(numberTwo));
        if( Math.sign(numberTwo) == 1){
            if(typeof(numberTwo)=='string'){
                numberTwo = cleanUp(numberTwo);
                numberTwo = '-' + numberTwo;
            } else {
                numberTwo = -numberTwo;
            }
        } else {
            if(typeof(numberTwo)=='string'){
                numberTwo = cleanUp(numberTwo);
                numberTwo = numberTwo.replace('-', '');
            } else {
                numberTwo = Math.abs(numberTwo);
            }
        }
        if(document.body.clientWidth > 750) {
            numTwoContainer.innerHTML = numberTwo;
        } else {
            resultContainer.innerHTML = numberTwo;
        }
    }
}

function cleanUp(x){
    x = x.replace(/[\n\r]+/g, '');
    x = x.replace(/\s{2,10}/g, '');
    x = x.trim();
    return x;
}
