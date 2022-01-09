const tableContainer = document.getElementById("table-container");

let myLibrary = [];

function Book(name, author, pages, genre, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.genre = genre
    this.read = read;
}
 
const mistborn = new Book("Mistborn", "Brandon Sanderson", 544, "Fantasy", false);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(mistborn);

myLibrary.forEach(item => addCard(item));

function addCard(item) {
    let card = document.createElement("div");
    card.classList.add("card"); 
        
    let togBtn = document.createElement("button");
    togBtn.textContent = "Complete?";
    togBtn.classList.add("switch");

    let title = document.createElement("p");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let genre = document.createElement("p");

    title.textContent = item.name;
    author.textContent = `By ${item.author}`;
    pages.textContent = `Pages: ${item.pages}`;
    genre.textContent = `Genre: ${item.genre}`;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(genre);
    card.appendChild(togBtn);

    tableContainer.appendChild(card);

    if (item.read) {
        card.classList.toggle("read");
    }
}





/*
const readBtn = Array.from(document.querySelectorAll("button"));
readBtn.forEach(btn => btn.addEventListener("click", togBtngleRead));

function togBtngleRead(e) {
    console.log("here");
    e.target.parentNode.classList.togBtngle("read");
} */