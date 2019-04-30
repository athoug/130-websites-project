// select global variables
const gridGenerateBtn = document.querySelector('.generate-grid-btn');
const grid = document.querySelector('.grid');

// function
function generateGrid() {
  // 1. get the number of rows and columns
  const rows = document.querySelector('input.row').value;
  const cols = document.querySelector('input.col').value;

  // 2. create the framgment that will contain the elements
  const fragment = document.createDocumentFragment();

  // 3.loop and create the grid
  for (let x = 0; x < rows; x++) {
    // i. create the table row
    const tr = document.createElement('tr');
    for (let y = 0; y < cols; y++) {
      // create the table colums
      const td = document.createElement('td');
      // give it the class of block
      td.classList.add('block');
      // add it to the table row
      tr.appendChild(td);
    }
    // ii. push the table row to the fragment
    fragment.appendChild(tr);
  }

  // 4. add teh fragment to the parent element
  grid.innerHTML = '';
  grid.appendChild(fragment);
}

// add the listeners
gridGenerateBtn.addEventListener('click', generateGrid);

// run the initial state of the grid
generateGrid();