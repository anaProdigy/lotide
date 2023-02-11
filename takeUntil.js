// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback / predicate returns a truthy value.
// It will take in two parameters as well:

// The array to work with
// The callback(which Lodash calls "predicate");

const takeUntil = function(array, callback) {
  const results = [];

  for (const item of array) {

    //callback returns a truthy value
    const value = callback(item)
    if (value) {
      return results;
    }
    results.push(item);

  }

  return results;
};




// FUNSTIONS FOR TESTING
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


// TEST CASE 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const expectedResults1 = [1, 2, 5, 7, 2];
assertArraysEqual(results1, expectedResults1);

//TEST CASE 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expectedResults2 = ['I\'ve', 'been', 'to', 'Hollywood'];
assertArraysEqual(results2, expectedResults2);

//TEST CASE 3
const data3 = [];
const results3 = takeUntil(data3, x => x === ',');
const expectedResults3 = [];
assertArraysEqual(results3, expectedResults3);