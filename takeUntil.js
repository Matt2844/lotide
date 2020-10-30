const takeUntil = function (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "stop") {
      callback(arr);
    }
  }
}

const foundAction = function (arr) {
  let sliceVal = arr.indexOf("stop");
  console.log(arr.slice(0, sliceVal));
}

// ARRAY/INPUT

takeUntil(["this", "is", "spart...", "an", "array", "stop", "wait", "what"], foundAction);


// NOTES
// return a "slice of the "array with elements taken from beginning
// it should keep going until the call/predicate return a truthty value
// callback should only be provided one value, the item in arr

// EXAMPLE
/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// EXPECTED OUTPUT
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

// TEST STUFF
const isArrEqual = function (arrOne, arrTwo) {
  return arrOne.join() === arrTwo.join() ? "True, match." : "False, NO match";
}

const eqArrays = function (arrOne, arrTwo) {
  return arrOne !== arrTwo ? true : false;
}