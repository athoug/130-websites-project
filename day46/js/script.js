window.onload = function() {

  // grab the elements
  const title = document.querySelector('.title');
  const code = document.querySelector('.code');
  const key = document.querySelector('.key');

  // hide keyboard
  key.style.display = 'none';


  window.addEventListener('keydown', function(e){
    key.style.display = 'block';
    code.innerHTML = "";
    key.innerHTML = "";

    console.log(e.keyCode);
    console.log(e.key);
    console.log(e);

    if(e.key === 'Tab' || e.key === " " || e.key === 'Enter' || e.key === 'Shift' || e.key === 'Meta' || e.key === 'Backspace' || e.key ==='Control' || e.key === 'CapsLock'){
      key.classList.add('adjustText');
    } else if(e.key === 'Escape' || e.key === "AltLeft" || e.key === "Meta"){
      key.classList.add('adjustText');
    }else {
      key.classList.remove('adjustText');
    }

    var keycode = document.createTextNode(e.keyCode);
    var keyPressed = document.createTextNode(e.key);
    if(e.keyCode === 32){
      keyPressed = document.createTextNode("Space");
    } else if (e.keyCode === 91) {
      keyPressed = document.createTextNode("Command");
    }
    code.appendChild(keycode);
    key.appendChild(keyPressed);

    // hide the title
    title.style.display = 'none';
  })
};
