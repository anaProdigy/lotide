// const assertEqual = require('./assertEqual');
// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

const eqObjects = require('./eqObjects');



// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
  
};

const ab = { a: "5", b: "2" };
const ba = { b: "2", a: "5" };
assertObjectsEqual(ab, ba);



























// const assertObjectsEqual = function(actual, expected) {
//   const inspect = require('util').inspect;
//   console.log(`Example label: ${inspect(actual)}`);

//   if (eqObjects(actual, expected)) {
//     console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
//   }
// };