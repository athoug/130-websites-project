var vid = document.getElementById('bgvid'),
pauseButton = document.getElementById('vidpause'),
content = document.getElementById('content'),
buttons = document.getElementById('buttons');

function vidFade() {
    vid.classList.add('stopfade');
}

vid.addEventListener('ended', function(){
    // function if loop removed
    vid.pause();
    vidFade();
});

pauseButton.addEventListener('click', function() {
    vid.classList.toggle('stopfade');
    if(vid.paused) {
        vid.play();
        buttons.style.marginTop = '485px';
        content.style.display = 'none';
        pauseButton.innerHTML = 'PAUSE VIDEO';
    } else {
        vid.pause();
        buttons.style.marginTop = '0';
        content.style.display = 'block';
        pauseButton.innerHTML = 'VIDEO PAUSED';
    }
});
