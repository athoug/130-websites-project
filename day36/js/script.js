
window.onload = function(){
    var btn = document.getElementById('button');
    var quote;
    var quoteText = document.getElementById('quote');
    var stringToAnimate = "";
    var loopTimer;
    var footerp = document.getElementById('footp');
    var footera1 = document.getElementById('foota1');
    var footera2 = document.getElementById('foota2');

    btn.addEventListener('click', function(){
        // chenge text and background color
        var backColor = getRandomColor();
        document.body.style.backgroundColor =  backColor;
        btn.style.backgroundColor =  backColor;

        var newcolor = getRandomColor();
        quoteText.style.color = newcolor;
        btn.style.color = newcolor;
        btn.style.borderColor = newcolor;
        footerp.style.color = newcolor;
        footera1.style.color = newcolor;
        footera2.style.color = newcolor;

        quoteText.innerHTML = "";
        quote = generateQuote();
        console.log(typeof(quote));
        console.log(quote);
        stringToAnimate = "“  " + quote[0] + "” \n by " + quote[1];
        var newArray = stringToAnimate.split("");
        console.log(newArray);

        var runMe = setInterval(typeWriter, 50);

        function typeWriter(){
            console.log(newArray);

            var x = newArray.shift();
            if(x == undefined){
                console.log('I am in');
                clearInterval(runMe);
            } else {
                quoteText.innerHTML += x;
            }

            console.log(x);
        }

    });


};



// generating random quote
function generateQuote(){
    var index = Math.round(Math.random()*quotes.length);
    return quotes[index];
}

// random colors
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
