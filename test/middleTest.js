// middle.js

const middle = require('../middle');
const isArrEqual = require("../assertArraysEqual")


//Test cases: 
console.log(isArrEqual(middle([1]))) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(isArrEqual(middle([1, 2, 3, 4]))) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
