const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true if both objects have identical keys with identical values. ", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };

    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    const expectedResult = true;
    const actualResult = eqObjects(multiColorShirtObject, anotherMultiColorShirtObject);
    assert.strictEqual(actualResult, expectedResult);
  });

  it("returns true if both objects have identical keys with identical values. ", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };

    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

    const expectedResult = false;
    const actualResult = eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject);
    assert.strictEqual(actualResult, expectedResult);
  });
 
  it("returns true if both objects have identical keys with identical values. ", () => {
    const shirtObject = { color: "red", size: "medium" };

    const anotherShirtObject = { size: "medium", color: "red" };

    const expectedResult = true;
    const actualResult = eqObjects(shirtObject, anotherShirtObject);
    assert.strictEqual(actualResult, expectedResult);
  });

});
