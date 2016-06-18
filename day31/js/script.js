window.onload = function(){

    // varables that I will constantly use
    var btn = document.getElementById('convert');
    document.getElementById('text').focus();

    function coverter(){ // function to convert text to binary
        var binary = document.getElementById('binary');
        var text = document.getElementById('text').value;
        binary.value = '';
        if(text.length > 0){
            for(var i=0; i<text.length; i++){
                binary.value += text[i].charCodeAt(0).toString(2) + " ";
            }
        } else if(text.length == 0) {
            alert('Please enter a text to convert');
        }

    }

    btn.addEventListener('click', coverter);
};
