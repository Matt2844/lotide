const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function (arr) {
  return arr.filter(element => arr.indexOf(element) > arr.indexOf(arr[0]));
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);