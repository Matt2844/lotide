//Assert Equal function 
const assertEqual = function(actual, expected) {
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

const findKeyByValue = function(obj, show) {
  for (let key of Object.keys(obj)) {
    if (obj[key] === show) {
      console.log(obj[key])
    } else {
      undefined;
    }
  }
}

module.exports = findKeyByValue
/*
// Test assertions
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// Second draft of answer
let findKeyByValue = function (obj, show) {
  for (let key in obj) {
    if (obj[key] === show) {
      return show;
    } else {
      return undefined;
    }
  }
}
*/

// Find Key By Value function

// Scan the object and return the first key which contains the given value. 
// If no value: undefined

// TO FIX: Returns "drama", "drama". fix duplicate. 

const findKeyByValue = function(obj, show) {
  const entries = Object.entries(obj);

  for (const [key, value] of entries) {
    if (show === value) {
      return key;
    } else {
      undefined
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
}

console.log((findKeyByValue(bestTVShowsByGenre, "The Wire")), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");