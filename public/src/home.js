function totalBooksCount(books) {
  // How many books are there? 
  return books.length;
}

function totalAccountsCount(accounts) {   
  // How many accounts are there? (customers)
  return accounts.length; 
}

function booksBorrowedCount(books) {
  // How many books have been borrowed? 
  // (1st key in borrows -> returned = false -> borrowed)
  let count = 0;
  books.forEach((book) => {
    if (book.borrows[0].returned === false) count += 1;
  });
  return count;
}

function getMostCommonGenres(books) {
  // What are the 5 most common genres?
  // most common to least by name & count together 
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
 
function getMostPopularBooks(books) {
  // What are the 5 most popular books? 
  // organized by name and count 
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
  // Who are the 5 most popular authors? 
  // organized by name and account 
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
  const popularAuthors = sortedPopTitles.reduce((acc = [], oneTitle) => {
    //console.log("acc", acc); 
    acc.push({
      name: oneTitle.theAuthorName,
      count: oneTitle.count,
    })
    return acc; 
  }, []); 
  
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
