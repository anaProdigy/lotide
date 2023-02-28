const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countLetters = (str) => {
  let result = {};
  const separated = str.split("");

  for (let letter of separated) {
    if (letter !== " ") {
      if (result[letter]) {
        
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }

  console.log("result", result);

  return result;

};
console.log(countLetters("lighthouse in the house"));

//countLetters("lighthouse in the house");


























// const countLetters = function(sentence) {
//   let results = {};

//   for (let letter of sentence) {
//     if (letter !== " ") {
//       if (results[letter]) {
//         results[letter] += 1;
//       } else {
//         results[letter] = 1;
//       }
//     }
//   }
//   return results;
// };


