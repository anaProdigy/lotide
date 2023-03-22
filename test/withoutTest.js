const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


//Test case:The without function should be returning a new array and not modify the original array that is passed in. Let's write a test case to ensure this:

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);