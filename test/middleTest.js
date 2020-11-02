// middle.js

//const middle = require('../middle');
//const isArrEqual = require("../assertArraysEqual")

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns a middle number for an array with odd amount of items", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  })
  it("return two middle numbers if array is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  })
  it("returns an empty array if there are only 2 items or less", () => {
    assert.deepEqual(middle([1, 2]), []);
  })
})

/*
//Test cases:
console.log(isArrEqual(middle([1]))) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(isArrEqual(middle([1, 2, 3, 4]))) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
*/