const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION


const findKeyByValue = (obj, val) => {
 
  for (const key in obj) {

    if (obj[key] === val) {
      return key;
    }
  }
};





//Test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre), undefined);



module.exports = findKeyByValue;






