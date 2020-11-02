// assertArraysEqual function
const isArrEqual = function(arrOne, arrTwo) {
  return arrOne.join() === arrTwo.join() ? "True, match." : "False, NO match";
}

//eqArrays function
const eqArrays = function(arrOne, arrTwo) {
  return arrOne !== arrTwo ? true : false;
}



//Implement middle function
//PLAN: return the middle element of a provided array. Two elements if array is even. Return empty if array is two elements or less. 
//STEPS: 

const middle = function(arr) {
  const mid = [];

  if (arr.length <= 2) {
    return mid;
  } else if (arr.length > 2 && arr.length % 2 !== 0) {
    let position = Math.floor(arr.length / 2);
    mid.push(arr[position])
    return mid;
  } else if (arr.length > 2 && arr.length % 2 === 0) {
    let position = Math.floor(arr.length / 2);
    mid.push(arr[position - 1]);
    mid.push(arr[position]);
    return mid;
  }
}

//Test cases: 
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]


module.exports = middle



