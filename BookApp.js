let books = [{
    title: "Harry Potter and the Philosopher's Stone",
    yearOfPublication: 1997,
    authorId: "f75d9089-0337-4624-8c7d-50292ae09993",
    bookId: "d9d47056-1ff2-4578-8e39-b40026f07e3b"
}, {
    title: "Harry Potter and the Chamber of Secrets",
    yearOfPublication: 1998,
    authorId: "f75d9089-0337-4624-8c7d-50292ae09993",
    bookId: "da3d9031-8b81-4ed0-b952-1c2f69190a59"
}, {
    title: "Harry Potter and the Prisoner of Azkaban",
    yearOfPublication: 2000,
    authorId: "f75d9089-0337-4624-8c7d-50292ae09993",
    bookId: "75e5bdc9-4907-4c5c-a7dc-9639a737e90c"
}, {
    title: "The Hobbit",
    yearOfPublication: 1937,
    authorId: "1e40f653-78a4-4867-8d06-bc9ce0f2533a",
    bookId: "5a892308-6a03-414e-abf7-565146300ba0"
}, {
    title: "The Fellowship of the Ring",
    yearOfPublication: 1954,
    authorId: "1e40f653-78a4-4867-8d06-bc9ce0f2533a",
    bookId: "059be4e0-26b3-45e4-8991-19bba3a11cd3"
}, {
    title: "The Two Towers",
    yearOfPublication: 1954,
    authorId: "1e40f653-78a4-4867-8d06-bc9ce0f2533a",
    bookId: "040bc79d-9281-4a97-8339-4ddef9e5c139"
}, {
    title: "The Return of the King",
    yearOfPublication: 1955,
    authorId: "1e40f653-78a4-4867-8d06-bc9ce0f2533a",
    bookId: "ca1f3362-9b79-457a-8235-d079e77450f5"
}];

let authors = [{
    firstName: "J.K.",
    lastName: "Rowling",
    id: "f75d9089-0337-4624-8c7d-50292ae09993"
}, {
    firstName: "J.R.R.",
    lastName: "Tolkien",
    id: "1e40f653-78a4-4867-8d06-bc9ce0f2533a"
}]

// Q1 - Create a function called getBooks which returns the titles of all books ordered by their publication year.
function getBooks(sortTerm) {
    let orderedBooks = books.sort((book1, book2) => book1[sortTerm].localeCompare(book2[sortTerm]));
    return orderedBooks.map(book => book.title);
}

// Q2 - Create a function called getBook which takes an id argument and returns the book with a matching id.
function getBook(id) {
    return books.find(book => book.bookId == id);
}

// Q3 - Create a function called getAuthor which takes an id argument and returns the author with the matching id.
function getAuthor(id) {
    return authors.find(author => author.id == id);
}

// Q4 - Create a function called getBooksByAuthor which takes the id of an author as an argument and returns an array of all the books written by that author in order of the year of publication.
function getBooksByAuthor(id) {
    let filteredBooks = books.filter(book => book.authorId == id);
    return filteredBooks.sort((book1, book2) => book1.yearOfPublication - book2.yearOfPublication);

}
// Q5 - Create a function called searchBooks which takes a string which is a search term as an argument. The function should return all books where the title or author name contains the given string.
function searchBooks(searchTerm) {
    function mapBooks(book) {
        function getAuthorById(author) {
            return author.id == book.authorId;
        }
        let author = authors.find(getAuthorById);
        return {
            title: book.title,
            yearOfPublication: book.yearOfPublication,
            author: `${author.firstName} ${author.lastName}`
        }
    }
    let detailedBooks = books.map(mapBooks);
    let searchResults = detailedBooks.filter(book => {
        for (const key in book) {
            if (book[key].toString().toLowerCase().includes(searchTerm)) {
                return true;
            }
        }
    })
    return searchResults;
}
console.log("Question 1 - List all Books");
console.log(getBooks("title"));
console.log();

// console.log("Question 2 - find Book by ID")
// console.log(getBook("059be4e0-26b3-45e4-8991-19bba3a11cd3"));
// console.log();

// console.log("Question 3 - find Author by ID")
// console.log(getAuthor("1e40f653-78a4-4867-8d06-bc9ce0f2533a"));
// console.log();

// console.log("Question 4 - find Books by Author ID in order of year of publicaiton")
// console.log(getBooksByAuthor("1e40f653-78a4-4867-8d06-bc9ce0f2533a"));
// console.log();

// console.log("Question 5 - Search for a given string");
// console.log(searchBooks("rowling"));
// console.log();

