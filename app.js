const tableContainer = document.getElementById("table-container");

let myLibrary = [];

function Book(name, author, pages, genre, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.genre = genre
    this.read = read;
}
 
const mistborn = new Book("Mistborn", "Brandon Sanderson", 544, "Fantasy", true);

function addBookToLibrary(book) {
    
    myLibrary.push(book);
}

addBookToLibrary(mistborn);

function addCards() {
    myLibrary.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card"); 

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete", "btn");
        deleteBtn.setAttribute("id", "delete");

        const title = document.createElement("p");
        title.textContent = item.name;
        title.style.fontWeight = "bold";
        title.style.fontSize = "22px";

        const author = document.createElement("p");
        author.textContent = `By ${item.author}`;

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${item.pages}`;

        const genre = document.createElement("p");
        genre.textContent = `Genre: ${item.genre}`;        

        const togBtn = document.createElement("button");
        togBtn.textContent = "Complete?";
        togBtn.classList.add("btn");
        togBtn.setAttribute("id", "complete");

        card.appendChild(deleteBtn);
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(genre);
        card.appendChild(togBtn);

        tableContainer.appendChild(card);

        if (item.read) {
            card.classList.toggle("read");
        }
    });
}

addCards();



/*
const readBtn = Array.from(document.querySelectorAll("button"));
readBtn.forEach(btn => btn.addEventListener("click", togBtngleRead));

function togBtngleRead(e) {
    console.log("here");
    e.target.parentNode.classList.togBtngle("read");
} */