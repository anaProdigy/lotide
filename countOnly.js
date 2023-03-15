const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if(itemsToCount[item]) {
    
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
    
    } else {
      results[item] = 0;
    }
   
  }
  const filteredResults = {};
  for (const item in itemsToCount) {
    if (itemsToCount[item] && results[item]) {
      filteredResults[item] = results[item];
    } else {
      filteredResults[item] = 0;
    }
  }
  return filteredResults;

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result1)









module.exports = countOnly;


