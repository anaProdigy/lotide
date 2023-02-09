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
const middle = function(array) {
  let middleArray = [];

  if (array.length <= 2) {
    return middleArray;

  } else if (array.length % 2 !== 0) {
   let midIndexOdd = Math.floor(array.length / 2);
   middleArray = array[midIndexOdd];
    
  } else {
    let midIndexEven1 = Math.floor(array.length / 2);
    let midIndexEven2 = Math.floor(array.length / 2) - 1;
    middleArray = array[midIndexEven1, midIndexEven2];
  }
  return middleArray;
};

// TEST CODE
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []


console.log(middle([1, 2, 3])); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

//assertArraysEqual(middle([1, 2]))