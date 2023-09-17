const myLibrary = [];

function Book(name, author, read) {
  this.name = name;
  this.author = author;
  this.read = Boolean(read);
}

function addBookToLibrary() {
  const newBook = new Book(inputName, inputAuthor, inputRead)
  myLibrary.push(newBook)
}