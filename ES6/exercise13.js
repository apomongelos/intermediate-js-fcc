/**
 * Exercise Thirteen
 * Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
 */

function removeFirstTwo(list) {
  // Only change code below this line
  const [, , ...shorterList] = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
