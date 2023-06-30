let myLibrary = [];
let title = '';
let author = '';
let pages = 0;
let read = '';
let readStatusButtonCounterArray = [];
let bookCount = 0;
let buttonCounter = 0;
const body = document.getElementById('body');
let deleteStatusIdCounter = 0;
//establish DOM variables
const modal = document.querySelector(".modal");
const addBooktrigger = document.querySelector(".addBookButton");
const closeButton = document.querySelector(".close-button");
const submitButton = document.querySelector(".submit");
//function which toggles modal on and off
function toggleModal(event) {
    modal.classList.toggle("show-modal");
    
}
//function which allows user to click outside modal to shut it
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
//function which collects the input values when user clicks submit 
//these values are then added as a new book object
//modal is toggled to off and form is reset

function collectInput(event){
  event.preventDefault()
  event.stopPropagation();
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("numPages").value;
  read = document.querySelector('input[name="bookRead"]:checked').value;
  addBookToLibrary();
  toggleModal();
  form = document.getElementById("bookInputForm");
  form.reset();
  
}

addBooktrigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


//check number of pages input for validity
const input = document.getElementById('numPages');
input.addEventListener('change', (event) => {
  const isValid = event.target.reportValidity();
  event.target.setAttribute('aria-invalid', !isValid);
});

function Book(title, author, pages, read) {
  // the book constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//creates a new book by sending data to constructor
//adds book to array and sends array to display book function

function addBookToLibrary() {
  // do stuff here
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBook(myLibrary);
}

//function which displays the last book in the library array
//grabs the span parent element and inserts the book object into the span as text
function displayBook(myLibrary) {
    let lastBook = myLibrary.length - 1;
    const newBar = document.createElement('div');
    newBar.classList.add("libraryBar")
    
    const titleSpan = document.querySelector('.title');
    const authorSpan = document.querySelector('.author');
    const pagesSpan = document.querySelector('.pages');
    const readSpan = document.querySelector('.read');
    const changeReadSpan = document.querySelector('.changeReadStatus');
    const changeDeleteSpan = document.querySelector('.delete');

    const p1 = document.createElement("span");
    p1.textContent = myLibrary[lastBook].title;
    p1.classList.add("title");
    newBar.appendChild(p1);
    const p2 = document.createElement("span");
    p2.textContent = myLibrary[lastBook].author;
    p2.classList.add("author");
    newBar.appendChild(p2);
    const p3 = document.createElement("span");
    p3.textContent = myLibrary[lastBook].pages;
    p3.classList.add("pages");
    newBar.appendChild(p3);
    const p4 = document.createElement("span");
    p4.textContent = myLibrary[lastBook].read;
    p4.setAttribute("id", buttonCounter + 20000);
    p4.classList.add("read");
    newBar.appendChild(p4);

    var p5 = document.createElement("button");
    p5.textContent = "Change Read Status";
    p5.classList.add("readButton");
    p5.setAttribute("id", buttonCounter);
    p5.setAttribute("onclick", "toggleReadStatus(event)")
    p5.classList.add("changeReadStaus");
    newBar.appendChild(p5);

    var p6 = document.createElement("button");
    p6.textContent = "Delete";
    p6.classList.add("readButton");
    p6.setAttribute("id", myLibrary.length + 10000);
    p6.setAttribute("onclick", "deleteBook(event)")
    p6.classList.add("delete");
    newBar.appendChild(p6);
    newBar.setAttribute("id", 100000 + bookCount);
    document.body.appendChild(newBar);
    buttonCounter++
    bookCount++;
}
//function to delete books. Checks for parent of delete button 
//then removes the div and resets the library to 0 if it was the last
//book eliminated
function deleteBook(event){
  let domId = event.target.parentElement;
  domId.remove();
  var total = document.getElementsByClassName("libraryBar").length;
  if(total === 1){
    myLibrary.length = 0;
    buttonCounter = 0;
    bookCount = 0;
  }
}

//function which toggles the read status on a given book 
function toggleReadStatus(event){
  var newNode = event.target.getAttribute('id');
  let domId = Number(newNode);
    if(myLibrary[domId].read == 'Yes'){
      myLibrary[domId].read = 'No';
    }
    else{
      myLibrary[domId].read = 'Yes';
    }
    domId = domId + 20000;
    var element = document.getElementById(domId);
    element.textContent = myLibrary[newNode].read;
  }

