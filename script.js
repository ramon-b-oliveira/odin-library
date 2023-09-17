const myLibrary = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = Boolean(read);
}

function addBookToLibrary() {
  const newBook = new Book(inputTitle, inputAuthor, inputRead)
  myLibrary.push(newBook)
}