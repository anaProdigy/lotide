const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns drama when 'The Wire' is passed in bestTVShowsByGenre for ", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };

    const findThis = "The Wire"
    const expectedResult = "drama";
    const actualResult = findKeyByValue(bestTVShowsByGenre, findThis)
    assert.strictEqual(actualResult, expectedResult);
  });


  it("returns indefined in bestTVShowsByGenre for ", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };

    const findThis = "That '70s Show";
    const expectedResult = undefined;
    const actualResult = findKeyByValue(bestTVShowsByGenre, findThis);
    assert.strictEqual(actualResult, expectedResult);
  });
});
