const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');
// // TEST 1
const words2 = ["ground", "control", "to", "major", "tom"];
const results2 = map(words2, word => word[0]);
const expectedResult = ['g', 'c', 't', 'm', 't'];
assertArraysEqual(results2, expectedResult);

// // TEST 2
const words3 = [];
const results3 = map(words3, word => word[0]);
const expectedResult3 = [];
assertArraysEqual(results3, expectedResult3);

// // TEST 3
const words4 = ["dog"];
const results4 = map(words4, word => word[0]);
const expectedResult4 = ['d'];
assertArraysEqual(results4, expectedResult4);
