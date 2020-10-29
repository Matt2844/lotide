//4:51

const words = ["ground", "control", "to", "major", "tom"];

//const results1 = map(words, word => word[0]);
//console.log(results1);

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

// Three different test cases using map

// 1.
const nameError = words.map(lyrics => lyrics.replace("tom", "Tom"));
console.log(nameError);

//2.

//3.

// Test code from previous exercises

/*
const isArrEqual = function (arrOne, arrTwo) {
  return arrOne.join() === arrTwo.join() ? "True, match." : "False, NO match";
}

const eqArrays = function (arrOne, arrTwo) {
  return arrOne !== arrTwo ? true : false;
}
*/