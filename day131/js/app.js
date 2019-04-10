// -- Functions --
// * function to creat cards and push it to the parent element
function createCards(array, parentElement, icons) {
  // 1. create the container fragment
  const fragment = document.createDocumentFragment();
  // 2. loop over each element in the array and construct the html element and append it
  array.forEach((item => {
    const div = document.createElement('div');
    div.className = "scene";
    div.innerHTML = `
      <div class="card">
        <div class="card-face face-front">
          <p class="title">${item.name}</p>
          <div class="icon">
            <img src="${icons[item.genre]}" alt="${item.genre} genere" class="icon-img">
            <span>${item.genre}</span>
          </div>
        </div>
        <div class="card-face face-back">
          <p>${item.disc}</p>
          <div class="icon">
            <img src="./svg/website.svg" alt="website" class="icon-img">
            <a href="${item.link}">${item.name}</a>
          </div>
        </div>
      </div>
    `;
    fragment.appendChild(div);
  }));
  // 3. add the fragment to the parent element
  parentElement.appendChild(fragment);
}
// * function to search the list of cards
function searchMe() {
  // 1. get the elements and hide them
  const cards = [...container.querySelectorAll('.title')];

  // 2. hide them
  cards.forEach(card => card.parentElement.parentElement.parentElement.classList.add('hide'));

  // 3. check if there is a match -> of so view it
  cards.forEach(card => {
    if (card.textContent.toLowerCase().startsWith(this.value.toLowerCase())) {
      card.parentElement.parentElement.parentElement.classList.remove('hide')
    }
  });
}

// select the container and populate it with elements
const container = document.querySelector('.container');
createCards(data, container, icon);

// adding a event listner to the search element
const search = document.getElementById('search');
search.addEventListener('input', searchMe);
