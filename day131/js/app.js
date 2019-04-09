// -- Functions --
function createCards(array, parentElement, icons) {
  // 1. create the container fragment
  const fragment = document.createDocumentFragment();
  // 2. loop over each element in the array and construct the html element and append it
  array.forEach(item => {
    const div = document.createElement('div');
    div.className = "scene";
    div.innerHTML = `
      <div class="card">
        <div class="card-face face-front">
          <p>${item.name}</p>
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
  });
  // 3. add the fragment to the parent element
  parentElement.appendChild(fragment);
}

const container = document.querySelector('.container');

createCards(data, container, icon);