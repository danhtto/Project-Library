/* Structure */

const container = document.querySelector('.bottom-container');
const form = document.querySelector('#userInput');
const formBackground = document.querySelector('.formBackground');
const userInputTitle = document.querySelector('#title');
const userInputAuthor = document.querySelector('#author');
const userInputPages = document.querySelector('#pages');
const userInputRead = document.querySelector('#read');
const overLay = document.querySelector('.form-background');
const removeButton = document.querySelector('#remove');
const addBook = document.querySelector('#addBook');
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

function resetBookContainer(){
    container.innerHTML = '';
}


function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    newBook = new Book(author,title,pages,read);
    return myLibrary.push(newBook);
};



function createBookCard () {
    const div = document.createElement('div');
    div.setAttribute('id', 'book');
    title = document.createElement('p');
    author = document.createElement('p');
    pages = document.createElement('p');
    read = document.createElement('button');
    remove = document.createElement('button');
    
    title.innerText = `"${userInputTitle.value}"`;
    author.innerText = userInputAuthor.value;
    pages.innerText = userInputPages.value;

    if(userInputRead.checked === true){
        read.innerText = 'read';
        read.style.backgroundColor = 'lightgreen';
    } else {
        read.innerText = 'not read yet';
        read.style.backgroundColor = 'red';
    }

    remove.innerText = 'remove';
    remove.setAttribute('id', 'remove');


    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(remove);
    container.appendChild(div);
}

function displayBook() {
    for(let book of myLibrary){
        return createBookCard();
    }
};

function resetForm() {
    return form.reset();
}


function removeBook(title){
    let bookIndex = 0;
    for( let book of myLibrary){
        if(title === book.title){
            bookIndex = myLibrary.indexOf(book);
            myLibrary.splice(bookIndex,1);
            return myLibrary;
        }
    }
    resetBookContainer();
    for(book of myLibrary) {
        const div = document.createElement('div');
        div.setAttribute('id', 'book');
        title = document.createElement('p');
        author = document.createElement('p');
        pages = document.createElement('p');
        read = document.createElement('button');
        remove = document.createElement('button');

        title.innerText = book.title;
        author.innerText = book.author;
        pages.innerText = book.pages;
        read.innerText = 'place Holder';
        remove.innerText = 'remove';
        remove.setAttribute('id', 'remove');

        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);
        div.appendChild(remove);
        container.appendChild(div);
    }
}

/* UI */

/* Form Submission */

addBook.addEventListener('click', function(e){
    form.classList.add('active');
    formBackground.classList.add('active');
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
    displayBook();
    console.log(myLibrary);
    resetForm();
    form.classList.remove('active');
    formBackground.classList.remove('active');
});

window.addEventListener('click', function(e){
    if(e.target.id === 'remove'){
       removeBook(e.target.parentNode.children[0].innerText);
    }
})

console.log(Object.keys(window));
