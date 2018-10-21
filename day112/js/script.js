const keyboard = Array.from(document.querySelectorAll(".key"));

keyboard.forEach(key => key.addEventListener("click", playAudio));


function playAudio(e) {
    let audio = document.querySelector(`audio[data-key=${e.keycode}]`);
    console.log(audio);
}
