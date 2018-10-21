const keyboard = Array.from(document.querySelectorAll(".key"));

keyboard.forEach(key => key.addEventListener("click", playAudio));
window.addEventListener("keydown", playAudio);


function playAudio(e) {
    let audio = document.querySelector(`audio[data-key=${e.key}]`);
    let key = document.querySelector(`div[data-key=${e.key}]`);
    console.log(e);
    if(!audio) {
        audio = document.querySelector(`audio[data-key=${this.getAttribute("data-key")}]`);
        key = document.querySelector(`div[data-key=${this.getAttribute("data-key")}]`);
        if (!audio) return;
    }

    audio.currentTime = 0;
    audio.play();
}
