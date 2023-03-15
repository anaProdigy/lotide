//The middle function should return an array with only the middle element(s) of the provided array.

const middle = (array) => {
  let result = [];

  if (array.length <= 2) {
    return result;
  }

  if (array.length % 2 !== 0) {
    const midIndex = Math.floor(array.length / 2);
    result.push(array[midIndex]);
  } else {
    midNum1 = Math.floor(array.length / 2) - 1;
    midNum2 = Math.floor(array.length / 2)
    result.push(array[midNum1], array[midNum2])
  }
  return result;
};
console.log(middle([1, 7, 6, 8, 5, 4]));
console.log(middle([1, 7, 6, 8, 5]));






module.exports = middle;

