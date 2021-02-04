function findAuthorById(authors, id) { 
 // look up author id to get author 
 return authors.find((author) => id === author.id)
}

function findBookById(books, id) {
// find whole book by book id 
return books.find((book) => {
if(book.id === id) {
  return book; 
  }
})
}

function partitionBooksByBorrowedStatus(books) { 
  // How many books are loaned out / borrowed? 
  // How many books have been returned? 
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
}

function getBorrowersForBook(book, accounts) {
    // Who (customer id) has borrowed what books?
    // Has the book been returned? true / false  
    // Only the top 10 borrowed 
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
