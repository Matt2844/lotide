const eqObjects = function(objOne, objTwo) {
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

const objectOne = {
  name: "boring example",
  likes: "Hello-World",
}

const objectTwo = {
  name: "something new",
  dislikes: "Hellow-World",
}

const objectThree = {
  name: "boring example",
  likes: "Hello-World",
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const keys1 = Object.keys(actual);
  const keys2 = Object.keys(expected);

  //if (Object.keys(objOne).length === Object.keys(objTwo).length) { 
  if (keys1.length !== keys2.length) {

    return false;
  }

  for (let key of keys1) {
    if (actual[key] !== expected[key]) {

      return false;
    }
  }
  console.log(`Example label: ${inspect(actual)}`);
  //console.log(keys1)
  return true;


}





console.log(assertObjectsEqual(objectOne, objectThree))