
window.onload = function(){
    var btn = document.getElementById('button');
    var quote;
    var quoteText = document.getElementById('quote');
    var stringToAnimate = "";
    var loopTimer;

    btn.addEventListener('click', function(){
        quote = generateQuote();
        console.log(typeof(quote));
        console.log(quote);
        stringToAnimate = "&ldquo;  " + quote[0] + "&rdquo; \n by " + quote[1];
        stringToAnimate = stringToAnimate.split("");
        frameLoop(stringToAnimate);
    });



    // animating the text
    function frameLoop(array){
        if(array.length > 0){
            quoteText.innerHTML += array.shift();
        } else {
            clearTimeout(loopTimer);
            return false;
        }

        loopTimer = setTimeout('frameLoop()', 70);
    }
};



// generating random quote
function generateQuote(){
    var index = Math.round(Math.random()*quotes.length);
    return quotes[index];
}
