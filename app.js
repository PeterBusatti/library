function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let complete;
        if (read) {
            complete = "have read";
        }
        else if (!read) {
            complete = "not read yet"
        }

        return name + " by " + author + ", " + pages + ", " + complete;
    }
}
const mistborn = new Book("Mistborn", "Brandon Sanderson", 544, true);

console.log(mistborn.info());