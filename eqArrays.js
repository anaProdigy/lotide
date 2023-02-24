const assertEqual = require('./assertEqual');

const eqArrays = (arr1, arr2) => {
  //check id arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] !== arr2[i]) {
      return false;

    }
   
  }
  return true;
};




// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
//console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
assertEqual(eqArrays([1, 2, 3], [3, 2]), false)


module.exports = eqArrays;