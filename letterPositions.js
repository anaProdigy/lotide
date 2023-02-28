//SUPPOSRTING FUNCTION
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

//assertArraysEqual([1, 2, 3], [1, 2, 3])



//NEW FUNCTION

const letterPositions = (str) => {
  const results = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (results[str[i]]) {
        results[str[i]].push(i);
      } else {
        results[str[i]] = [i];
      }

    }
  }


  return results;
};

//console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));
//assertArraysEqual(letterPositions("hello").e, [1]);

//assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);


















