function totalBooksCount(books) {
  // books --> array of objects
  // count the objects that are in the array --> hence count the books
  // return a number that is the count
  return books.length;
}

function totalAccountsCount(accounts) {   
  let total = accounts.reduce(total => {
  return total + 1}, 0); 
  return total;
}

function booksBorrowedCount(books) {
  // console.log(books);
  // return a number
  // number of books checked out
  // books.borrows[0].returned is false, it is checked out (not returned)
  /*

  let countCheckedOut = 0; 
  for (let book of books){    
    if (book.borrows[0].returned === false) {
      countCheckedOut+= 1
    }
}
return countCheckedOut; 
*/

  let count = 0;
  books.forEach((book) => {
    if (book.borrows[0].returned === false) count += 1;
  });
  return count;
}


  // return an array 
  // array must have 5 objects or less
  // find most common genres 
  // sort by most common to least 
  // no more than 5 genres should be returned so limit to 5
  // find how many times a genre repeats itself 
  // first need to know what genres there even are 
  // genres are like science, classics, travel, "young adult", non-fiction, etc. 
  // populate an array of objects that has genres and the number of times it shows up 

  /*const filterByGenre = books.filter((book) => {
    return book.genre; 
  })

  for (let i = 0; filterByGenre.length; i++) {
    let array =[]; 
    if(!filterByGenre === array) {
      sum+= 1
    }
  }
  */
function getMostCommonGenres(books) {
const logOfGenres = {}; 
const mostCommonGenres = []; 

for (let book of books) {
  logOfGenres[book.genre] ? logOfGenres[book.genre] += 1  : logOfGenres[book.genre] = 1 
}
console.log(logOfGenres); 

for (let i = 0; i < Object.keys(logOfGenres).length; i++) {
  mostCommonGenres.push({
    name: Object.keys(logOfGenres)[i],
    count: Object.values(logOfGenres)[i] 
  })
}
return mostCommonGenres.sort((genreA, genreB) => genreA.count > genreB.count ? -1 : 1).slice(0,5)
}


// an array of books 
// containing 5 objects or less
// get most popular books in the library 
// popular is number of times book borrowed 
// returned array objects have two keys
// name: title of book 
// count: number of times borrowed 
function getMostPopularBooks(books) {
  const mostCommonBooks = [];
  for (const book of books) {
    const { borrows, title } = book;
    mostCommonBooks.push({
      name: title,
      count: borrows.length,
    });
  }
  return mostCommonBooks.sort((a, b) => (a.count > b.count ? -1 : 1)).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const mostPopularTitles = [];
  for (const book of books) {
    let theAuthorName;
    let count = book.borrows.length;
    for (let author of authors) {
      const { first, last } = author.name;
      if (book.authorId === author.id) {
        theAuthorName = `${first} ${last}`;
      }
    }
    mostPopularTitles.push({
      ...book,
      theAuthorName,
      count,
    });
  }
  let sortedPopTitles = mostPopularTitles.sort((a, b) => (a.count > b.count ? -1 : 1));
  const popularAuthors = [];
  for (const oneTitle of sortedPopTitles) {
    popularAuthors.push({
      name: oneTitle.theAuthorName,
      count: oneTitle.count,
    });
  }
  return popularAuthors.slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
