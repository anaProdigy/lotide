const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};




// const eqObjects = function(object1, object2) {
//   const arr1 = Object.keys(object1);
//   const arr2 = Object.keys(object2);

//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for(const key in object1) {

//     if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
//       if (eqArrays(object1[key], object2[key] )){
//           return true;
//         } else if (object1[key] === object2[key]) {
//           return true;
//         }
//       }
//       return true;

//   }
//   return false;
// };

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


//TEST ARRAYS AS VALUES
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false


// //Test primitive values

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true



// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject, longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);













// const eqObjects = function(object1, object2) {

//   let array1 = Object.keys(object1);
//   let array2 = Object.keys(object2);
//   // console.log("array1: ", array1)
//   //   console.log("array2: ", array2)
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let key of array1) {
//     if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//       if (!eqArrays(object1[key], object2[key]))
//         return false;
//     }

//   }

//   return true;
// };
