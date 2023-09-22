const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputRead = document.querySelector('#read');
const addButton = document.querySelector('.add');
const libraryDisplay = document.querySelector('.library');
const myLibrary = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = Boolean(read);
}

function addBookToLibrary(event) {
  let read = false
  if (inputRead.checked) {
    read = true
  }
  const newBook = new Book(inputTitle.value, inputAuthor.value, read);
  myLibrary.push(newBook);
  event.preventDefault();
  inputTitle.value = "";
  inputAuthor.value = "";
  inputRead.checked = false;
  displayBooks(myLibrary)
  console.log(myLibrary)
}

function displayBooks(list) {
  libraryDisplay.innerHTML = ""
  list.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.dataset.index = myLibrary.indexOf(book);
    const markup = 
    `
    <h3>${book.title}</h3>
    <p>${book.author}</p>
    <button class="button remove">remove</button>
    <button class="button toggle">read</button>
    `

    bookCard.classList.add("book");
    bookCard.innerHTML = markup
    if (book.read === true) {
      bookCard.classList.add('read')
    }
  
    libraryDisplay.appendChild(bookCard)
  });

  changeColor();
  removeBook();
}

function changeColor() {
  const toggleReadButton = document.querySelectorAll('.toggle');
  toggleReadButton.forEach( button => {
    button.addEventListener('click', function(e) {
      e.target.parentNode.classList.toggle('read');
    });
  });
}

function removeBook() {
  const removeButton = document.querySelectorAll('.remove');
  removeButton.forEach( button => {
    button.addEventListener('click', function(e) {
      const index = e.target.parentNode.dataset.index;
      myLibrary.splice(index, 1);
      displayBooks(myLibrary);
    });
  });
}

addButton.addEventListener("click", addBookToLibrary)