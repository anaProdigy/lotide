const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');
// TEST CASE 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const expectedResults1 = [1, 2, 5, 7, 2];
assertArraysEqual(results1, expectedResults1);

// //TEST CASE 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const expectedResults2 = ['I\'ve', 'been', 'to', 'Hollywood'];
assertArraysEqual(results2, expectedResults2);

// //TEST CASE 3
const data3 = [];
const results3 = takeUntil(data3, x => x === ',');
const expectedResults3 = [];
assertArraysEqual(results3, expectedResults3);