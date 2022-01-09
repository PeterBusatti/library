const tableContainer = document.getElementById("table-container");

let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
const mistborn = new Book("Mistborn", "Brandon Sanderson", 544, true);

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(mistborn);

function addCard() {
    myLibrary.forEach(item => {
        let card = document.createElement("div");
        card.classList.add("card");
    
        let title = document.createElement("p");
        let author = document.createElement("p");
        let pages = document.createElement("p");
        let read = document.createElement("p");

        title.textContent = item.name;
        author.textContent = item.author;
        pages.textContent = item.pages;
        read.textContent = item.read;

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);

        tableContainer.appendChild(card);

        if (read) {
            card.classList.toggle("read");
        }
    });
}

addCard();
