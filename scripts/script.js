//select the elements from the DOM
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");
const form = document.querySelector("#form");
const test = document.querySelector("#test");
const bookListing = document.querySelector(".book-listing");

// The action taken when the form is submited - calls the function to add a new book
form.addEventListener("submit", addBookToLibrary);

// The array tot store the book objects
let myLib = [
  {
    title: "Imaginary Friends",
    author: "JK someone",
    pages: 214,
    isRead: "Yes!",
  },
  {
    title: "Hobbit",
    author: "LK",
    pages: 122,
    isRead: "No",
  },
  {
    title: "Scooby",
    author: "LOlse",
    pages: 22,
    isRead: "Yes",
  },
];

//Object that creates the book
function Books(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

//function that is being called when the form is submited
function addBookToLibrary() {
  event.preventDefault();
  //creates a new book object
  const newBook = new Books(
    title.value,
    author.value,
    pages.value,
    isRead.value
  );
  //adds the newly created book to the array
  myLib.push(newBook);
  loopBooks();
  console.table(myLib);
  form.reset();
}

function loopBooks() {
  bookListing.innerHTML = "";
  for (let i = 0; i < myLib.length; i++) {
    displayBooks(myLib[i]);
    console.table(myLib[title]);
  }
}

function displayBooks(book) {
  const bookTitle = document.createElement("p");
  bookTitle.className = "book-title-listing";
  bookTitle.textContent = book.title;

  const bookAuthor = document.createElement("p");
  bookAuthor.className = "book-author-listing";
  bookAuthor.textContent = book.author;

  const bookPages = document.createElement("p");
  bookPages.className = "book-pages-listing";
  bookPages.textContent = book.pages;

  const bookRead = document.createElement("p");
  bookRead.className = "book-read-listing";
  bookRead.textContent = book.isRead;

  bookListing.append(bookTitle, bookAuthor, bookPages, bookRead);
}
