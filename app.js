let myLibrary = [];
let title = '';
let author = '';
let pages = 0;
let read = '';
const body = document.getElementById('body');
//establish DOM variables
const modal = document.querySelector(".modal");
const addBooktrigger = document.querySelector(".addBookButton");
const closeButton = document.querySelector(".close-button");
const submitButton = document.querySelector(".submit");
//function which toggles modal on and off
function toggleModal() {
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
//submitButton.addEventListener("click", collectInput);

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
    // titleSpan.classList.add(".title");
    //const fragment = document.createDocumentFragment();

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
    const p5 = document.createElement("button");
    p5.textContent = "Change Read Status";
    p5.classList.add("readButton");
    changeReadSpan.appendChild(p5);
    //document.body.appendChild(titleSpan);
    // const p2 = document.createElement("p");
    // const p3 = document.createElement("p");
    // const p4 = document.createElement("p");
    // const readButton = document.createElement("button");
    // readButton.classList.add("readButton");
    // readButton.innerHTML = 'Change Read Status';

    // p1.textContent = myLibrary[lastBook].title;
    // p2.textContent = myLibrary[lastBook].author;
    // p3.textContent = myLibrary[lastBook].pages;
    // p4.textContent = myLibrary[lastBook].read;
    // fragment.appendChild(p1);
    // fragment.appendChild(p2);
    // fragment.appendChild(p3);
    // fragment.appendChild(p4);
    // fragment.appendChild(readButton);
    // bookBar.appendChild(fragment);
    // document.body.appendChild(bookBar);

}





