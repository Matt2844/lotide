
// Copy of past exercise eqArrays

const eqArrays = function (arrOne, arrTwo) {
  return arrOne !== arrTwo ? true : false;
}


/* 
PLAN: Compare two arrays. console log an appropriate message. 
STEPS: See if the arrays match. If they match, print out message. If they do not match,
print out message. 
*/

let arrOne = [1, 2, 3];
let arrTwo = [1, 2, 9];

const isArrEqual = function (arrOne, arrTwo) {
  return arrOne.join() === arrTwo.join() ? "True, match." : "False, NO match";
}

//TEST

console.log(isArrEqual(arrOne, arrTwo))
