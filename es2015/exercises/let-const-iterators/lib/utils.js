'use strict';
const utils = {
  // it should receive an iterable element and call the received function with each element
  // of the iterable object
  forEach(iterable, fn) {
    for (let elem of iterable) {
      fn(elem);
    }
  },

  // it should receive an infinite number or parameters and return the multiplication of all
  // do not use "forEach", "map" or "reduce"
  multiply(...numbers) {
    if (numbers == undefined || numbers.length <= 0 ) {
      throw 'No parameters were supplied';
    }

    let result = 1;
    for (let number of numbers) {
      if (typeof number != 'number') {
        throw 'The parameters should be numbers';
      }

      result *= number;
    }

    return result;
  },

  // it should return an array of arrays, each array element will have only two elements,
  // the first one representing the key names and the second one its values
  // it should also check if the given parameters it's an object and throw an error otherwise
  // Example: entries({a:1, b:2, c:3}) === [['a',1], ['b', 2], ['c',3]]
  entries(obj) {
  },

  // it should return the same object, adding the functionality to be consumed as an iterable
  // it should also check if the given parameters it's an object and throw an error otherwise
  // Example:
  // for (let x of makeIterable({a:1,b:2})) {
  //   console.log(x);
  // }
  // should print ['a',1], ['b', 2]
  makeIterable(obj) {
    obj[Symbol.iterator] = function () {
        let i= 0,
          arr = [1,2,3];

        if (typeof obj != 'object') {
          throw 'The parameter should an object';
        }

        return {
            next(){
              let value = obj[i];
              console.log(value);
              i++;
              return {value, done: i === arr.length + 1};
            }
        }
    };

    return obj;
    console.log(obj);
  }
};


module.exports = utils;