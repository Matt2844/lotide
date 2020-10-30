// FIND KEY FUNCTION

const findKey = function (obj, callback) {
  const keys = Object.keys(obj);
  const entries = Object.entries(obj);
  const values = Object.values(obj);

  for (const [key, value] of Object.entries(obj)) {
    if (value >= 8) {
      return console.log(`I am going to apply to ${key}`)
    }
  }
  callback()
}

const errorMsg = function () {
  console.log(undefined);
}

findKey({
  Brainstation: '6',
  GeneralAssembly: '6',
  JunoCollege: '7',
  LHL: '9',
}, errorMsg);



// EXAMPLE INPUT

/*
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
*/



// TEST FUNCTIONS

const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};
