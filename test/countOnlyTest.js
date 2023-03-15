const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
 

  it("returns 1 for the array of names", () => {
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
    const toCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

    const expectedCounts = { "Jason": 1, "Karima": 0, "Fang": 2, "Agouhanna": 0 };

    const result = countOnly(firstNames, toCount);
    assert.deepEqual(result, expectedCounts);
  });

});


