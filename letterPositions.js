// Copied function
const eqArrays = function(arrOne, arrTwo) {
  return arrOne !== arrTwo ? true : false;
}
//Copied function
const isArrEqual = function(arrOne, arrTwo) {
  return arrOne.join() === arrTwo.join() ? "True, match." : "False, NO match";
}


// Actual problem below

/* PLAN
1. Split
2. iterate 
3. create keys of letters
4. key values = letter index positions, and push those index positions 
*/


const letterPositions = function(sentence) {
  const resultObj = {};
  const arr = sentence.split('').join('')
  console.log(arr)

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if (resultObj[arr[i]]) {
      resultObj[arr[i]].push(i);
    } else {
      resultObj[arr[i]] = [i]
    }
  }
  return resultObj;

};
console.log(letterPositions("hello"));

module.exports = letterPositions
/* Intended output somthing like:

h: [0]
e: [1]
l: [2, 3]
...etc

*/