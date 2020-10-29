//Function from before
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};


// Actual problem below 

const eqObjects = function (objOne, objTwo) {
  const keys1 = Object.keys(objOne);
  const keys2 = Object.keys(objTwo);

  //if (Object.keys(objOne).length === Object.keys(objTwo).length) { 
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (objTwo[key] !== objTwo[key]) {
      return false;
    }
  }
  //console.log(keys1)
  return true;
}



// Test Code

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false