//Assert Equal function 
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};


// Find key by value function 
// NOTES/OBJECTIVE: 
// - Takes in an object and a value
// - Return the first key which contains the value
// - If no key with given value is found, return undefined

/* PLAN
1.  If key exists, spit out that key
2. If no key exists, undefined
*/

const findKeyByValue = function (obj, show) {
  for (let key of Object.keys(obj)) {
    if (key === show) {
      console.log(obj[key])
    } else {
      undefined;
    }
  }
}






// Test assertions
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);