/**
 * Exercise Eighteen
 * Iterate Through the Keys of an Object with a for...in Statement
 */

const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let usr in usersObj) {
    if (usersObj[usr].online) {
      count++;
    }
  }
  return count;
  // Only change code above this line
}

console.log(countOnline(users));
