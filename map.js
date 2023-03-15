const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
//Our map function will take in two arguments:

// An array to map
// A callback function

// The map function will return a new array based on the results of the callback function.


const words = ["ground", "control", "to", "major", "tom"];
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const result1 = map(words, word => word[0])
console.log(result1);



// // TEST 1
const words2 = ["ground", "control", "to", "major", "tom"];
const results2 = map(words2, word => word[0]);
const expectedResult = ['g', 'c', 't', 'm', 't'];
assertArraysEqual(results2, expectedResult);

// // TEST 2
const words3 = [];
const results3 = map(words3, word => word[0]);
const expectedResult3 = [];
assertArraysEqual(results3, expectedResult3);

// // TEST 3
const words4 = ["dog"];
const results4 = map(words4, word => word[0]);
const expectedResult4 = ['d'];
assertArraysEqual(results4, expectedResult4);




