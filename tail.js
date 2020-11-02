
// assertEqual is commented out because test is running from the test folder

/*const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};
*/

const tail = function(arr) {
  return arr.filter(element => arr.indexOf(element) > arr.indexOf(arr[0]));
};



module.exports = tail;

