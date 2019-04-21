// set data endpoint location
const endpoint = 'https://gist.githubusercontent.com/athoug/37ddc898fb2a78682535f93a84badad4/raw/3739c75a5aed49ea296f77b0f30179dae1cdd278/books.json';
// get the DOM elements
const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions');

// an empty array of books to hold the data
const books = [];
// we fetch the fata using the browser fetch API and store it in a promise
// we then filter out the data when the response status is 200
const promis = fetch(endpoint).then(rawData => rawData.json()).then(data => books.push(...data)).catch(err => console.log(err));


// --- functions ---
function findMatches(wordToMatch, booksArray) {
  return booksArray.filter((book) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return book.title.match(regex) || book.author.match(regex);
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, books);
  const html = matchArray.map((book) => {
    const regex = new RegExp(this.value, 'gi');
    const bookTitle = book.title.replace(regex, `<span class="highlight">${this.value}</span>`);
    const authorName = book.author.replace(regex, `<span class="highlight">${this.value}</span>`);

    return `
       <li>
        <span class="name">${bookTitle}, </span>
        <span class="autor">${authorName}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

// add the event listers
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);