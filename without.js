// Copied functions from other problem. 

const assertArraysEqual = function (arrOne, arrTwo) {
  return arrOne.join() === arrTwo.join() ? "True, match." : "False, NO match";
}

const eqArrays = function (arrOne, arrTwo) {
  return arrOne !== arrTwo ? true : false;
}

// New problem below this comment. 

/* 
PLAN: Take in a "source" array and a "itemsToRemoveArray". Return a new array with only
those elements from "source" that are NOT in the "itemsToRemove". aka source != items to newArr
STEPS: Create an empty array. Compare array elements by iterating. Find the non-matches. Move 
       the items that do not match to the new array. 

*/

const without = function (source, itemsToRemove) {
  let newArr = [];
  newArr = source.filter(item => !itemsToRemove.includes(item));
  return newArr;
};

// TEST CODE. From Compass. 

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

// TEST CASE. Is the original array modified? 

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//END