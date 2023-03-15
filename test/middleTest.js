const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1, 2 ]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [6,8] for [1, 7, 6, 8, 5, 4]", () => {
    assert.deepEqual(middle([1, 7, 6, 8, 5, 4]), [6, 8]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
});