
// create a object representing a book with properties  like title , author and year
// and log the object to console 


var book = {
    "title" : "cybersquad",
    "author" : "iram",
    "year" : "2024",
}

console.log(book)


//access and log the title and author property 


console.log(book.title)
console.log(book.author)



// add a method to the book object that returns a string with the books title and author
//and log the result of calling this method


var book = {
    "title": "cybersquad",
    "author": "iram",
    "year": 2024,
    getDetails: function() {
        return this.title + " by " + this.author;
    }
};

console.log(book.getDetails());



//create a nested object representing library with properties name and book
//(an array of book object) and log the result to console 

var library = {
    "name" : "cyber squad",
    "book": [
        {
        "title": "squad",
    "author": "iram",
    "year": 2024,
        },

        {
            "title": "network squad",
        "author": "iram",
        "year": 2024,
            }
    ]
}
 


// access and log the name of the library and  title of all the books in the library 

console.log(library.name)
library.book.forEach(function(book) {
    console.log(book.title);
});
