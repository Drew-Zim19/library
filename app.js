let myLibrary = [];
let title = '';
let author = '';
let pages = 0;
let read = '';
let readStatusButtonCounterArray = [];
let readStatusArrayCounter = 0;
const body = document.getElementById('body');
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
  
    const titleSpan = document.querySelector('.title');
    const authorSpan = document.querySelector('.author');
    const pagesSpan = document.querySelector('.pages');
    const readSpan = document.querySelector('.read');
    const changeReadSpan = document.querySelector('.changeReadStatus');


    const p1 = document.createElement("p");
    p1.textContent = myLibrary[lastBook].title;
    titleSpan.appendChild(p1);
    const p2 = document.createElement("p");
    p2.textContent = myLibrary[lastBook].author;
    authorSpan.appendChild(p2);
    const p3 = document.createElement("p");
    p3.textContent = myLibrary[lastBook].pages;
    pagesSpan.appendChild(p3);
    const p4 = document.createElement("p");
    p4.textContent = myLibrary[lastBook].read;
    readSpan.appendChild(p4);

    var p5 = document.createElement("button");
    p5.textContent = "Change Read Status";
    p5.classList.add("readButton");
    p5.setAttribute("id", readStatusArrayCounter);
    p5.setAttribute("onclick", "toggleReadStatus(event)")
    changeReadSpan.appendChild(p5);
    readStatusArrayCounter++;

}

function toggleReadStatus(event){
    let domId = event.target.getAttribute('id');
    if(myLibrary[domId].read == 'Yes'){
      myLibrary[domId].read = 'No'
    }
    else{
      myLibrary[domId].read = 'Yes'
    }
    domId++;
    var element = document.getElementById("readHeader").children[domId];
    var newNode = myLibrary[domId - 1].read;
    element.innerHTML = newNode;
  }
