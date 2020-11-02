// Assert Equal function from previous exercise. 
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

// New problem countLetters below
// Automatically adds a letter key and updates its count. 
const countLetters = function(str) {
  const arr = str.split('');
  const resultObj = {};

  for (let val of arr) {
    if (resultObj[val]) {
      resultObj[val]++
    } else {
      resultObj[val] = 1
    }
  }
  console.log(resultObj);
  return resultObj
}



console.log(countLetters('LHL'))

module.exports = countLetters; 