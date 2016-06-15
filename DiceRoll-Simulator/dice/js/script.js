// declaring the text content
var diceRoolContent = [
    '<p id="one">&bull;</p>',
    '<p id="two">&bull; &nbsp; &bull;</p>',
    '<p id="three">&bull; &bull; &bull;</p>',
    '<p id="four">&bull;&nbsp; &bull;</p><p id="four">&bull;&nbsp; &bull;</p>',
    '<p id="five">&bull;&nbsp; &bull;</p><p id="five" class="center">&bull;</p><p id="five">&bull;&nbsp; &bull;</p>',
    '<p id="six">&bull;&nbsp; &bull;</p><p id="six">&bull;&nbsp; &bull;</p><p id="six">&bull;&nbsp; &bull;</p>'
];


function rollDice(){
    var number = Math.floor((Math.random() * 6)); //Getting the dice rool
    rollthedice(); //The animating function
    console.log(number); // For debuging perposes
    var el = document.getElementById("dice"); // get the element ID
    el.innerHTML = diceRoolContent[number]; // Write the element on the HTML page
}

// Function for animation
function rollthedice() {
    for (var i = 0; i < 20; i++) {
        var listOfNumbers = Math.floor((Math.random() * 6)); //to add a bit of animation
        console.log(listOfNumbers); // For debuging perposes

        setTimeout( function(){
            var element = document.getElementById("dice");
            element.innerHTML = diceRoolContent[listOfNumbers];
        }, (700)); // Setting up a timer function that will hault execution for a secont

        }
}
