const takeUntil = (array, callback) => {
  const newArray = [];

  for (const item of array) {
    if (callback(item)) {
      break;
    }
    newArray.push(item);
  }
  return newArray;
};




module.exports = takeUntil;