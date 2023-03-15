const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {


  it("returns counts of letters in a multiword string ", () => {
    const input = "lighthouse in the house";
    const actualResults = letterPositions(input);
    const expectedResults = {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    };
    assert.deepEqual(actualResults, expectedResults);
  });

  it("returns counts of letters in a  singleword string ", () => {
    const input = "hello";
    const actualResults = letterPositions(input);
    const expectedResults = { h: [0], e: [1], l: [2, 3], o: [4] };
    assert.deepEqual(actualResults, expectedResults);
  });

});
