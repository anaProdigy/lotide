const assertEqual = require('./assertEqual');


let newArray = [];
const tail = (array) => {

  for (i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;

};

const result = tail(["Hello", "Lighthouse", "Labs"]);
 assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs");

// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

//An array with only one element should yield an empty array for its tail
const word = tail([]);
console.log(word)
// assertEqual(result, [])

module.exports = tail;