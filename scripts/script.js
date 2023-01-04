//select the elements from the DOM
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const form = document.querySelector("#form");
const bookListing = document.querySelector(".book-listing");

// The action taken when the form is submited - calls the function to add a new book
form.addEventListener("submit", addBookToLib);

// The array tot store the book objects
let myLib = [
  {
    title: "Dark Matter",
    author: "Michelle Paver",
    pages: 246,
    read: "Read",
  },
  {
    title: "Imaginary Friend",
    author: "Stephen Chbosky",
    pages: 705,
    read: "Not read",
  },
  {
    title: "Stolen Tongues",
    author: "Felix Blackwell",
    pages: 320,
    read: "Read",
  },
];

//Object that creates the book
function Books(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = readStatus;
}

//function that is being called when the form is submited
function addBookToLib() {
  event.preventDefault();
  //creates a new book object
  const newBook = new Books(title.value, author.value, pages.value, read.value);
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
    const changeRead = document.createElement("div");
    changeRead.classList.add("change-read-status");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookRead = document.createElement("p");

    removeBtn.innerHTML = `<button class="removebtn" onclick="removeBook(${i})">Delete</button>`;
    changeRead.innerHTML = `<button onclick="toggleRead(${i})">Change Status</button>`;

    bookTitle.className = "book-title-listing";
    bookTitle.textContent = myLib[i].title;

    bookAuthor.className = "book-author-listing";
    bookAuthor.textContent = myLib[i].author;

    bookPages.className = "book-pages-listing";
    bookPages.textContent = myLib[i].pages;

    bookRead.className = "book-read-listing";
    bookRead.textContent = myLib[i].read;

    bookListing.append(
      bookTitle,
      bookAuthor,
      bookPages,
      bookRead,
      removeBtn,
      changeRead
    );
  }
}

function removeBook(i) {
  myLib.splice(i, 1);
  loopBooks();
}

function toggleRead(i) {
  if (myLib[i].read === "Read") {
    myLib[i].read = "Not read";
  } else {
    myLib[i].read = "Read";
  }
  loopBooks();
}

loopBooks();
