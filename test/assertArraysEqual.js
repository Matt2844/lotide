// assertArraysEqual.js

const isArrEqual = require("../assertArraysEqual")

const eqArrays = require('../eqArrays');


let arrOne = [1, 2, 3];
let arrTwo = [1, 2, 9];
eqArrays(isArrEqual(arrOne, arrTwo))