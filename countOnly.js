//AssertEqual test function
const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

// Implement countOnly in Lotide
// NOTES: 
// - Take in a collection of items and return counts for a specific sunset of those items. 
// - itemsToCount = Object
// - allItems = list of items [arr] strings
// OBJECTIVE: Function should report back how many instances of each string were found in the allItems array of strings.  

const countOnly = function (allItems, itemsToCount) {
  const results = {}

  for (const item of allItems) {
    if (itemsToCount[item])
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    return results;
  }

}




//Test Code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);