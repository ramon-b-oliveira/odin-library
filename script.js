const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputRead = document.querySelector('#read');
const addButton = document.querySelector('.addbutton');
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
}

addButton.addEventListener("click", addBookToLibrary)