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