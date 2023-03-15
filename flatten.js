const flatten = (array) => {
const newArray = [];

for( const item of array) {
  if(!Array.isArray(item)) {
    newArray.push(item)
  } else {
    for (const element of item) {
      newArray.push(element)
    }
  }
}
return newArray;
}



module.exports = flatten;