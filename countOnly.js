const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
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











module.exports = countOnly;


