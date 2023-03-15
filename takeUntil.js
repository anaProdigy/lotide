const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback / predicate returns a truthy value.
// It will take in two parameters as well:

// The array to work with
// The callback(which Lodash calls "predicate");

const takeUntil = (array, callback) => {
const newArray = [];

for (const item of array) {

  if (callback(item)) {
    break;
  }
  newArray.push(item);
}
return newArray;
}




// TEST CASE 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const expectedResults1 = [1, 2, 5, 7, 2];
assertArraysEqual(results1, expectedResults1);

// //TEST CASE 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expectedResults2 = ['I\'ve', 'been', 'to', 'Hollywood'];
assertArraysEqual(results2, expectedResults2);

// //TEST CASE 3
const data3 = [];
const results3 = takeUntil(data3, x => x === ',');
const expectedResults3 = [];
assertArraysEqual(results3, expectedResults3);