/**
 * Exercise Six
 * Refactor Global Variables Out of Functions
 */

// The global variable
const bookList = [
  'The Hound of the Baskervilles',
  'On The Electrodynamics of Moving Bodies',
  'Philosophiæ Naturalis Principia Mathematica',
  'Disquisitiones Arithmeticae',
];

// Change code below this line
function add(bookList, bookName) {
  return [...bookList, bookName];
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  const book_index = bookList.indexOf(bookName);
  const bookListCopy = [...bookList];
  if (book_index >= 0) {
    bookListCopy.splice(book_index, 1);
    return bookListCopy;
    // Change code above this line
  }
}
