let myLibrary = [];

function Book() {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = true;
    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
};

