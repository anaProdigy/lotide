const eqArrays = require('./eqArrays');

//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console. A function which utilizes eqArrays.js to compare two arrays for an exact match, then prints a pass or fail assertion

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

};


assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);





module.exports = assertArraysEqual;