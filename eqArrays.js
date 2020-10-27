const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} does not equal ${expected}`);
  } else if (actual === expected) {
    console.log(`Assertion Passed: ${actual} equals ${expected}`);
  }
};

// eqArrays Problem Below

const eqArrays = function (arrOne, arrTwo) {
  return arrOne !== arrTwo ? true : false;
}

// Test Case

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false