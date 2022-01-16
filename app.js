const tableContainer = document.getElementById("table-container");
const userTitle = document.getElementById("title");
const userAuthor = document.getElementById("author");
const userPages = document.getElementById("pages");
const userGenre = document.getElementById("genre");
const submitBtn = document.getElementById("submit");

const myLibrary = [
    {
       name: "Mistborn",
       author: "Brandon Sanderson",
       pages: "544",
       genre: "Fantasy",
       read: true,
   },
];

function Book(name, author, pages, genre, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.genre = genre
    this.read = read;
}

tableContainer.addEventListener("click", removeItem);
tableContainer.addEventListener("click", toggleRead);
submitBtn.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
    if (userTitle.value == "" || userAuthor.value == "") {
        alert("Please fill out TITLE and AUTHOR");
    }
    else {
        const newBook = new Book(userTitle.value, userAuthor.value, userPages.value,
            userGenre.value, document.getElementById("checkbox").checked);
        
        myLibrary.push(newBook);
        createCard(newBook);
        resetForm();
    }
    
}

function addCards() {
    myLibrary.forEach(item => createCard(item));
}

function createCard(item) {
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
    togBtn.classList.add("btn", "togbtn");
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
}

function resetForm () {
    userTitle.value = "";
    userAuthor.value = "";
    userPages.value = "";
    userGenre.value = "";
    document.getElementById("checkbox").checked = false;
}

function removeItem(e) {
    if (e.target.classList.contains("delete")){
        if(confirm("Are you sure you want to delete this?")){
            tableContainer.removeChild(e.target.parentElement);
            myLibrary.splice(myLibrary.indexOf(this),1)
        }
    }
}

function toggleRead(e){
    if (e.target.classList.contains("togbtn")){
        e.target.parentNode.classList.toggle("read");
    }
}

addCards();




/* const readBtn = Array.from(document.querySelectorAll("button"));
readBtn.forEach(btn => btn.addEventListener("click", togBtn));

function togBtn(e) {
    console.log("here");
    e.target.parentNode.classList.togBtn("read");
} */