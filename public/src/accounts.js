function findAccountById(accounts, id) {
  
  return accounts.find((account) => account.id === id); 
    //looking up the id which is in accounts that is in an object
    //return the whole object attached to that id
}

function sortAccountsByLastName(accounts) {
  // sort by last name
  // go into accounts, find the name, then go into the last name
  return accounts.sort((lnameA, lnameB) => lnameA.name.last.toLowerCase() < lnameB.name.last.toLowerCase() ? -1 : 1)
}

function numberOfBorrows(account, books) {
  // One object of one account that has one id of a customer's account 
  // Database of books in an array of objects that has objects
  // Must get to the borrowed books array which keyed to "id" in the borrows key
  // No need to loop through the account because it is only one account
  // Must loop through the books to access books.borrows.id
  // Must match the account given/argument id to the books.borrows.id

  //console.log(account); 
  //console.log(books);
  
  //books = array of objects borrows = is a key in the object which points to an array of objects
  
  
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

/*
  console.log(account) --> an object of one customer
  {
  id: '5f446f2ed3609b719568a415',
  picture: 'http://placehold.it/32x32',
  age: 31,
  name: { first: 'Corinne', last: 'Pearson' },
  company: 'EARTHWAX',
  email: 'corinne.pearson@earthwax.com',
  registered: 'Tuesday, March 24, 2020 10:39 AM'
}
  */
 /*console.log(books) --> array of objects like this: 
 {
  id: '5f447132c30e8abe6c988a8b',
  title: 'veniam voluptate magna ipsum officia',
  genre: 'Historical Fiction',
  authorId: 37,
  borrows: [ [Object], [Object] ]
},
{
  id: '5f447132d487bd81da01e25e',
  title: 'sit eiusmod occaecat eu magna',
  genre: 'Science',
  authorId: 8,
  borrows: [
    [Object], [Object],
    [Object], [Object],
    [Object], [Object],
    [Object], [Object],
    [Object], [Object],
    [Object]
  ]
  
  borrows: [
        {
          id: "5f446f2e6059326d9feb9a68",
          returned: false,
        },
  
  */
  /*console.log(authors) --> array of objects like this: 
  [{ id: 37, name: { first: 'Cristina', last: 'Buchanan' } },
  { id: 8, name: { first: 'Susanne', last: 'Lawson' } } ]
  */

function getBooksPossessedByAccount(account, books, authors) {
  // final output will be an array 
  // find all books currently checked out by the customer in the account 
  // there is one account / one customer we are looking up
  // look to see what books that customer has checked out 
  // get the info on the authors of the books that are checked out as well
  // put the books checked out and the authors in the returned array
  // find out if a book is checked out when returned is false
  // if it is false, which is checked out, then I will need the customer id
  // with the customer id I will know who has the book checked out
  // using the book id of the checked out book, look up the author id
  // use the author id to look up the author's name 
  // let bookcheckedOut = books.borrows[0].id; 
  // let checkedOutBookCustomerId = ""; // customer that has the book checked out
  let bookCheckedOutTitleAndAuthorId = []; // book checked out's title with the author's id
  //let authorIds = []; // all the author ids of the books checked out by the customer
  /*for (let i = 0; i < books.length; i++) {
   const borrowed = books[i].borrows[0];  
   const justBook = books[i]; // getting each book object 
     if (borrowed.returned == false && account.id == borrowed.id) {
      //const authorsId = justBook.id
      bookCheckedOutTitleAndAuthorId.push(justBook);
     }    
 }*/
 //console.log(books); 
 bookCheckedOutTitleAndAuthorId = books.filter((book) => {
   let currentBook = book.borrows[0]; 
   return currentBook.returned == false && account.id == currentBook.id  
 })

 let result = bookCheckedOutTitleAndAuthorId.map((book) => {
   let authorIdFound = authors.find((auth) => auth.id === book.authorId); 
   return { ...book, author: authorIdFound}; 
 })
 return result;  
 //console.log(bookCheckedOutTitleAndAuthorId.length); 

 //book.borrows[0].id;

/*bookCheckedOutTitleAndAuthorId = bookCheckedOutTitleAndAuthorId.map(titleAuthIndex => {
  let authNameObj = titleAuthIndex.name; 
  titleAuthIndex.name = authors.find(authName => authNameObj === authorsId).name
  return titleAuthIndex;  
})
return bookCheckedOutTitleAndAuthorId; */
 // output an array that has all the titles of books checked out by the customer
 // and all the authors name objects 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
