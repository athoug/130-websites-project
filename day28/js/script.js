window.onload = function() {

    for(var i = 1; i <= 50; i++) {
        var element = document.createElement('p');
        var t = document.createTextNode('This is dummy text ' + i);
        element.appendChild(t);
        document.body.appendChild(element);
    }

};


function parallax() {
    var paralax_lyr_1 = document.getElementById('para_lyr_1');
    paralax_lyr_1.style.top = -(window.pageYOffset / 10)+'px';
}


window.addEventListener('scroll', parallax, false);
