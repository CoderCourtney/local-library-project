// authors is an array
// id is a single author provided 
// use the id to look up the author
// return the matching author object

function findAuthorById(authors, id) { 
 return authors.find((author) => id === author.id)
}

// books is an array 
// id is of a single book - just the id
// return the whole book object correlating to that id


function findBookById(books, id) {
return books.find((book) => {
if(book.id === id) {
  return book; 
}
})
}

// books is an array 
// return an array w/ 2 arrays 
// 1st array books out not returned 
// 2nd array books returned 
// all books get returned
function partitionBooksByBorrowedStatus(books) { 
  const borrowed = books.filter((item) => {
    for (let book of item.borrows) {
      return book.returned === false; 
    } 
  }); 
  const returned = books.filter((item) => {
    for (let book of item.borrows) {
      return book.returned === true; 
    }
  });    
return [borrowed, returned];  
//console.log(newArray); 
//return newArray; 
}

// book is an object 
// accounts is an array of all accounts 
// return an array 
// all transactions from the borrows key 
// include account info 
// include returned key (true / false)
function getBorrowersForBook(book, accounts) {
    const { borrows } = book;
    let borrowedBooks = borrows.map((borrow) => {
      for (let account of accounts) {
        if (borrow.id === account.id) {
          return { ...borrow, ...account };
        }
      }
    });
    if (borrowedBooks.length > 10) {
      return borrowedBooks.slice(0, 10);
    } else {
      return borrowedBooks;
    }
  }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
