//select the elements from the DOM
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const isRead = document.querySelector("#isRead");
const form = document.querySelector("#form");
const bookListing = document.querySelector(".book-listing");

// The action taken when the form is submited - calls the function to add a new book
form.addEventListener("submit", addBookToLibrary);

// The array tot store the book objects
let myLib = [
  {
    title: "Dark Matter",
    author: "Michelle Paver",
    pages: 246,
    isRead: "No",
  },
  {
    title: "Imaginary Friend",
    author: "Stephen Chbosky",
    pages: 705,
    isRead: "Yes!",
  },
  {
    title: "Stolen Tongues",
    author: "Felix Blackwell",
    pages: 320,
    isRead: "Yes!",
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
    const removeBtn = document.createElement("div");
    const bookTitle = document.createElement("p");

    bookTitle.className = "book-title-listing";
    bookTitle.textContent = myLib[i].title;
    removeBtn.innerHTML = `<button class="removebtn" onclick="removeBook(${i})">Delete</button>`;

    const bookAuthor = document.createElement("p");
    bookAuthor.className = "book-author-listing";
    bookAuthor.textContent = myLib[i].author;
    removeBtn.innerHTML = `<button class="removebtn" onclick="removeBook(${i})">Delete</button>`;

    const bookPages = document.createElement("p");
    bookPages.className = "book-pages-listing";
    bookPages.textContent = myLib[i].pages;
    removeBtn.innerHTML = `<button class="removebtn" onclick="removeBook(${i})">Delete</button>`;

    const bookRead = document.createElement("p");
    bookRead.className = "book-read-listing";
    bookRead.textContent = myLib[i].isRead;
    removeBtn.innerHTML = `<button class="removebtn" onclick="removeBook(${i})">Delete</button>`;

    bookListing.append(bookTitle, bookAuthor, bookPages, bookRead, removeBtn);
  }
}

function removeBook(i) {
  myLib.splice(i, 1);
  loopBooks();
}

loopBooks();
