const findKey = (obj, cb) => {
  for (const key in obj) {
    if (cb(obj[key])) {
      return key;
    }
  }
};




module.exports = findKey;







