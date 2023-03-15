const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



//Implement without which will return a subset of a given array, removing unwanted elements.This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = (source, itemsToRemove) => {
  const newArray = [];
for ( let i = 0; i < source.length; i++) { 
  
  if (!itemsToRemove.includes( source[i])) { 
   newArray.push(source[i])
}
}

  return newArray;
}




//console.log(without([1, 2, 3], [1])); // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


//Test case:The without function should be returning a new array and not modify the original array that is passed in. Let's write a test case to ensure this:

// const words = ["hello", "world", "lighthouse"];
//  console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
//  assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"])