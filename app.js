let myLibrary = [];
let title = '';
let author = '';
let pages = 0;
let read = false;
const body = document.getElementById('body');

function Book(title, author, pages, read) {
  // the book constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}



let addBookButton = document.getElementById('addBookButton');
addBookButton.addEventListener("click", () => {
    
    
});

function addBookToLibrary() {
  // do stuff here
  
}






title = prompt("Hello! Please input a book title");
console.log(title)
const book1 = new Book(title, author, pages, read);
console.log(book1)

