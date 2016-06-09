
window.onload = function(){

    var isSadClicked = false;
    var eyes_left = document.getElementById('leftEye');
    var eyes_right = document.getElementById('rightEye');

    function removeActive(){
        if(!isSadClicked){
            if (this.id == 'hap'){
                this.className = 'happy';
                document.getElementById('sa').className = 'sad';
            } else {
                this.className = 'sad';
                document.getElementById('hap').className = 'happy';
            }
        } else {
            if (this.id == 'hap'){
                this.className = 'sad-btn-happy';
                document.getElementById('sa').className = 'sad-btn-sad';
            } else {
                this.className = 'sad-btn-sad';
                document.getElementById('hap').className = 'sad-btn-happy';
            }
        }

    }

    function addSadStyle(){
        isSadClicked = true;

        document.body.className = 'sad-body';
        document.getElementById('hap').className = 'sad-btn-happy';
        document.getElementById('sa').className = 'sad-btn-sad sad-active';
        var eyes = document.getElementsByClassName('eyes');
            for( var i = 0 ; i < eyes.length; i++){
                eyes[i].style.backgroundColor = '#9999CC';
            }
        document.getElementById('frown').className = 'mouth-size down';
        var links = document.getElementsByTagName('a');
        for( var i = 0 ; i < links.length; i++){
            links[i].className = 'sad-footer-a';
        }
    }

    function addHappyStyle(){
        isSadClicked = false;

        document.body.className = '';
        document.getElementById('hap').className = 'happy active';
        document.getElementById('sa').className = 'sad';
        var eyes = document.getElementsByClassName('eyes');
            for( var i = 0 ; i < eyes.length; i++){
                eyes[i].style.backgroundColor = '#FF9933';
            }
        document.getElementById('frown').className = 'mouth-size up';
        var links = document.getElementsByTagName('a');
        for( var i = 0 ; i < links.length; i++){
            links[i].className = '';
        }
    }

    document.getElementById('hap').addEventListener('mouseover', removeActive, false);
    document.getElementById('sa').addEventListener('mouseover', removeActive, false);

    document.getElementById('sa').addEventListener('click', addSadStyle, false);
    document.getElementById('hap').addEventListener('click', addHappyStyle, false);

    eyes_left.addEventListener('webkitAnimationEnd', function(){
        this.style.webkitAnimationName = '';
    }, false);

    eyes_right.addEventListener('webkitAnimationEnd', function(){
        this.style.webkitAnimationName = '';
    }, false);


    setInterval(function(){
        if(eyes_left.style.webkitAnimationName == ''){
            eyes_left.style.webkitAnimationName = 'blink';
            eyes_right.style.webkitAnimationName = 'blink';
        } else {
            eyes_left.style.webkitAnimationName = '';
            eyes_right.style.webkitAnimationName = '';
        }


    }, 3000);


}
