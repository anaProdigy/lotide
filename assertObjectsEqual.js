const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};




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


const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
};



const eqObjects = function(object1, object2) {
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      } else continue;
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};



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