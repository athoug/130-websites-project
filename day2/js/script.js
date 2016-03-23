
function computersChoice() {
    // inisilizing the choices
    var weapon = ['paper', 'rock', 'scissor'];

    // generating the computers choices
    var indexChoice = Math.floor(Math.random() * 3);

    return weapon[indexChoice]; // returning the choice

}

function clearAll() {
    var el = document.getElementById('result');
    el.style.display = "none";
}

function displayResult(message) {
    var content = '<p>' + message + '</p>' + '<div class="button" onclick="clearAll()">Play Again</div>';
    var el = document.getElementById('result');
    el.style.display = "block";
    el.innerHTML = content;
}

function comparison(userChoice) {

    // function to get user choice
    var user = userChoice;
    // function to get computer choice
    var computer = computersChoice();

    if (computer == 'paper') {
        if (user == 'paper'){
            // return 'it is a tie';
            // console.log('it is a tie');
            displayResult('It is a tie. Both of you chose paper');
        }
        else if (user == 'rock') {
            // return 'Sorry mate the computer crushed your ass!';
            // console.log('Sorry mate the computer crushed your ass!');
            displayResult('Sorry mate the computer crushed your ass! It picked paper while you chose rock.');
        }
        else {
            // return 'nice job! You won';
            // console.log('nice job! You won');
            displayResult('nice job! You won. The computer chose paper while you chose scissor.');
        }
    }

    else if (computer == 'rock'){
        if (user == 'paper'){
            // return 'nice job! You won';
            // console.log('nice job! You won');
            displayResult('nice job! You won. The computer chose rock while you chose paper.');
        }
        else if (user == 'rock') {
            // return 'it is a tie';
            // console.log('it is a tie');
            displayResult('It is a tie. Both of you chose rock.');
        }
        else {
            // return 'Sorry mate the computer crushed your ass!';
            // console.log('Sorry mate the computer crushed your ass!');
            displayResult('Sorry mate the computer crushed your ass! It picked rock while you chose scissor.');
        }
    }

    else {
        if (user == 'paper'){
            // return 'Sorry mate the computer crushed your ass!';
            // console.log('Sorry mate the computer crushed your ass!');
            displayResult('Sorry mate the computer crushed your ass! It picked scissor while you chose paper.');
        }
        else if (user == 'rock') {
            // return 'nice job! You won';
            // console.log('nice job! You won');
            displayResult('nice job! You won. The computer chose scissor while you chose rock.');
        }
        else {
            // return 'it is a tie';
            // console.log('it is a tie');
            displayResult('It is a tie. Both of you chose scissor.');
        }
    }
}
