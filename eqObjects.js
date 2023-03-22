const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const arr1 = Object.keys(object1);
  const arr2 = Object.keys(object2);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      } else continue;
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};









module.exports = eqObjects;








