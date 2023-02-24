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

//assertArraysEqual([1, 2, 3], [1, 2, 3]);



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