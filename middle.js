// TEST/ASSERTION FUNCTIONS

const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
};


//a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.
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


// ACTUAL FUNCTION
//The middle function should return an array with only the middle element(s) of the provided array.

const middle = (array) => {
  let result = [];

  if (array.length <= 2) {
    return result;
  }

  if (array.length % 2 !== 0) {
    result = Math.floor(array.length / 2);
    result.push(array[midElement]);
  } else {
    midNum1 = Math.floor(array.length / 2) - 1;
    midNum2 = Math.floor(array.length / 2)
    result.push(array[midNum1], array[midNum2])
  }
  return result;
};
console.log(middle([1, 7, 6, 8, 5, 4]));


assertArraysEqual(middle([1, 7, 6, 8, 5, 4]), [6,8])
assertArraysEqual(middle([1, 7]), [])



module.exports = middle;

