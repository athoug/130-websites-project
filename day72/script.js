var count = 0;
var text = ['Hey!', 'Hey!', 'Hey LISTEN!'];

document.querySelector('body').addEventListener("click", function( event ) {
   document.querySelector('.listen').textContent = text[count];
  count++;
  if(count === 3) count = 0;
  }, false);
