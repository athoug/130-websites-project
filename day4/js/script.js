var name = '#div';

// Random color generator function
function randomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';

    for(var i =0; i <6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }

    return color;
}

function hex(){
    setInterval(function(){
        for (var i=1; i<13; i++){
            $(name+i).css({"background-color": randomColor()});
        }
    }, 400);
}


hex();
