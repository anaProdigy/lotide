
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// FUNCTION IMPLEMENTATION


const findKeyByValue = (obj, val) => {
  let result = '';
  if (!obj || !val) {
    return;
  }
  for (const key in obj) {

    if (obj[key] === val) {

      return result = key;

    }
  }
  return;
};

// const findKeyByValue = (object, value) => {


//   for (let key of Object.keys(object)) {
//     if (object[key].includes(value)) {
//       return key;

//     }
//   }


//   return;
// };

//Test cases
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre), undefined);










