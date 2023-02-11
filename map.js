//Our map function will take in two arguments:

// An array to map
// A callback function

// The map function will return a new array based on the results of the callback function.




const map = function(array, callback) {
  const results = [];
 
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');

    results.push(callback(item));
  }

  return results;
}




// FUNSTIONS FOR TESTING
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console. A function which utilizes eqArrays.js to compare two arrays for an exact match, then prints a pass or fail assertion


const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
};


// TEST 1
const words2 = ["ground", "control", "to", "major", "tom"];
const results2 = map(words2, word => word[0]);
const expectedResult = ['g', 'c', 't', 'm', 't'];
assertArraysEqual(results2, expectedResult);

// TEST 2
const words3 = [];
const results3 = map(words3, word => word[0]);
const expectedResult3 = [];
assertArraysEqual(results3, expectedResult3);

// TEST 3
const words4 = ["dog"];
const results4 = map(words4, word => word[0]);
const expectedResult4 = ['d'];
assertArraysEqual(results4, expectedResult4);