const { findAuthorById } = require('./books.js')

function findAccountById(accounts, id) {  
  return accounts.find((account) => account.id === id); 
    //looking id which is in accounts object
    //return the whole object attached to that id
    // whole customer account 
}

function sortAccountsByLastName(accounts) {
  // go into accounts, find the name
  // sort by last name
  return accounts.sort((lnameA, lnameB) => lnameA.name.last.toLowerCase() < lnameB.name.last.toLowerCase() ? -1 : 1)
}

function numberOfBorrows(account, books) {
  // How many times has the customer borrowed books? 
  let sum = 0; 
  for (let i = 0; i < books.length; i++) {
    const bookBorrowed = books[i].borrows; 
    for (let j = 0; j < bookBorrowed.length; j++) {
      // borrows -> customer id matches the id in the account given
      if (bookBorrowed[j].id === account.id) {
        sum++; 
      }
    }
  }
  return sum; 
}

function getBooksPossessedByAccount(account, books, authors) {
  // How many books does the customer have checked out? 
  // Return books and authors 
 let bookCheckedOutTitleAndAuthorId = []; 

 bookCheckedOutTitleAndAuthorId = books.filter((book) => {
   let currentBook = book.borrows[0]; 
   return currentBook.returned == false && account.id == currentBook.id  
 })

 let result = bookCheckedOutTitleAndAuthorId.map((book) => {
   let authorIdFound = findAuthorById(authors, book.authorId)
   return { ...book, author: authorIdFound}; 
 })
 return result;  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
