const keyboard = document.querySelectorAll(".keys-white");

for(let i=0; i < keyboard.length; i++) {
  keyboard[i].addEventListener("click", (e) => {
    console.log(`clicked ${keyboard[i].getAttribute("data-key")}`);
  });
}
