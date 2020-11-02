# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @matthew.henry.ford/lotide`

**Require it:**

`const _ = require('@matthew.henry.ford/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `isArrEqual()`: Compares two arrays to see if they are equal
* `assertEqual()`: Test function to see if actual input equals expected output 
* `countLetters()`: Automatically adds a letter key and updates its count
`countOnly()`: Takes in a collection of items and returns counts for a specific subset of those items
`eqArrays()` : If two arrays are equal it returns true or false
`eqObjects()`: Compares the length of two objects and returns true or false
`findKey()`: Searches an object key for a specific parameter
`findKeyByValue`: Takes in an object and its values. Returns the first key which contains the value. If no value is found, return undefined
`head()`: Returns the first item in an array, known as the head of an array
`letterPositions()`: Takes a letter from a string and prints out its location in the string. Does this for every letter. 
`map()`: Callback and copy of the regular .map() function. Goes through the array looking for specifications and changing the array if true
`middle()`: Finds the middle of an array.
`tail()`: Finds the tail or elements that are not the head of the array
`takeUntil()`: Returns a slice of the original array with elements taken from the begging. Will return the elements until a call/predicate returns a truthy value. 
`without()`: Takes in a "source" and "itemsToRemoveArray". Returns the source and excludes anything that is present in the items to remove array. 