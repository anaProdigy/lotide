const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true if both arrays have identical value ", () => {
    const expectedResult = true;
    const actualResult = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.strictEqual(actualResult, expectedResult);
  });


  it("returns false if both arrays have identical length but different order values ", () => {
    const expectedResult = false;
    const actualResult = eqArrays([1, 2, 3], [3, 2, 1]);
    assert.strictEqual(actualResult, expectedResult);
  });


  it("returns true if both arrays have identical length same values as strings ", () => {
    const expectedResult = true;
    const actualResult = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    assert.strictEqual(actualResult, expectedResult);
  });

  it("returns false if both arrays have identical length but values are mixed - nums and strings", () => {
    const expectedResult = false;
    const actualResult = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    assert.strictEqual(actualResult, expectedResult);
  });
});