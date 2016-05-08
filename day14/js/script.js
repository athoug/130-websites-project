

var options = ['tails', 'head'];

function flip(flipF, flipB) {
    var choice = Math.round(Math.random());
    var image = document.getElementById('coin');

    var front = document.getElementById('front');
    var back = document.getElementById('back');

    console.log(options[choice]);

    document.getElementById('front').className+=' '+flipF;
    document.getElementById('back').className+=' '+flipB;

    setTimeout(function(){
        document.getElementById('front').className=' ';
        document.getElementById('back').className=' ';
    }, 5000);

    if (options[choice] == 'tails') {
        // image.src = 'img/tail.jpg';
        document.getElementById('front').style.transform = 'perspective(600px) rotateX(-270deg)';
        document.getElementById('back').style.transform = 'perspective(600px) rotateX(0deg)';
    } else {
        // image.src = 'img/head.jpg';
        document.getElementById('front').style.transform = 'perspective(600px) rotateX(0deg)';
        document.getElementById('back').style.transform = 'perspective(600px) rotateX(270deg)';
    }


}
