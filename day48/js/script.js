function handelUpdate() {
  console.log(this.value);
  console.log(document.documentElement);
  const suffix = this.dataset.sizing || '';
  console.log(this.value + suffix);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// select the element
const inputs = document.querySelectorAll('.controls input');


// manipulate it
inputs.forEach(input => input.addEventListener('change', handelUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handelUpdate));
