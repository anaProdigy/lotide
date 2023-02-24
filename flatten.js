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


const flatten = (array) => {
const newArray = [];

for( const item of array) {
  if(!Array.isArray(item)) {
    newArray.push(item)
  } else {
    for (const element of item) {
      newArray.push(element)
    }
  }
}
return newArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); 
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6] )