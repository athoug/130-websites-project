
function createBoxes(){
    for (var i = 0; i < (3655 + window.innerHeight); i++) {
        var newElement = document.createElement('div');
        newElement.className = 'square';
        newElement.setAttribute('id', 'div-'+i);
        newElement.onclick = function(){
            var color = document.getElementById('myColor').value;
            this.style.backgroundColor = color;
        };
        document.getElementById('canvas').appendChild(newElement);
    }
}
