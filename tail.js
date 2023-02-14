const assertEqual = require('./assertEqual');


const tail = function(array) {
  let resultTail = [];
  for (let i=1; i < array.length; i++) {
    resultTail.push(array[i])
  }
  return resultTail;
}




module.exports = tail;