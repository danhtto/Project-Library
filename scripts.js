/* Structure */

const container = document.querySelector('.bottom-container');
const form = document.querySelector('#userInput');
const formContainer = document.querySelector('.form-container');
const userInputTitle = document.querySelector('#title');
const userInputAuthor = document.querySelector('#author');
const userInputPages = document.querySelector('#pages');
const userInputRead = document.querySelector('#read');
const overLay = document.querySelector('.form-background');
const submit = document.querySelector('.submit');



let myLibrary = [];

class Book {
    author = 'unkown';
    title = 'unkown';
    pages = 0;
    read = false;
    constructor(author,title,pages,read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
    }
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
};


function addBookToLibrary(newBook) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    newBook = new Book(`${author}`,`${title}`,`${pages}`,`${read}`);
    myLibrary.push(newBook);
    return console.log(myLibrary);
};


function displayBook() {
    for( let book in myLibrary) {
        console.log(myLibrary[book]);
        const div = document.createElement('div');
        div.setAttribute('class', `card-${book}`);
        div.setAttribute('id', 'book');
        div.setAttribute('data',`${book}`)

        const author = document.createElement('p');
        const title = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('button');
        const remove = document.createElement('button');

        author.innerText = myLibrary[book].author;
        title.innerText = `"${myLibrary[book].title}"`;
        pages.innerText = myLibrary[book].pages;
        remove.innerText = 'Remove';
        if(myLibrary[book].read === 'true') {
            read.innerText = 'Read';
        } else {
            read.innerText = 'Not read yet';
        }

        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);
        div.appendChild(remove);
        container.appendChild(div);


    }
};


const libary = displayBook();

/* UI */

/* Form Submission */

submit.addEventListener('click', function(e) {
    e.preventDefault();
    addBookToLibrary();
    displayBook();
});




