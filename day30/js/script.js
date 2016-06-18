window.onload = function() {

    var WIDTH = window.innerWidth - 30;
    var HEIGHT = window.innerHeight - 30;


    function createStars(){
        for (var i = 0; i < 100; i++) {
            var el = document.createElement('div');
            el.setAttribute('class', 'star');
            el.setAttribute('id', 'item-'+i);
            document.body.appendChild(el);
        }

        for (var i = 0; i < 100; i++) {
            var el = document.getElementById('item-'+i);
            el.style.left = Math.round(Math.random() * WIDTH) + 'px';
            el.style.top = Math.round(Math.random() * HEIGHT)+ 'px';
            var size = Math.random()*0.7;
            el.style.width = size + 'rem';
            el.style.height = size + 'rem';
        }
    }

    createStars();
}
