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
    midNum2 = Math.floor(array.length / 2);
    result.push(array[midNum1], array[midNum2]);
  }
  return result;
};







module.exports = middle;

