// +++++ numbers ++++++

const score = 400 // javascript automatically detects it datatype is number.
console.log(score);

const balance = new Number(200) // you are specially mentioning that it is a number.
console.log(balance);

console.log(balance.toString().length); // => 3
console.log(balance.toFixed(3)); // => 200.000 
console.log(typeof balance.toFixed(3)); // string

const otherNumber = 4846.5342 
console.log(otherNumber.toPrecision(3));
// priority is given before decimal.

const check = otherNumber.toPrecision(3) 
console.log(typeof check); // => string

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN')); // by default US standard

//                           +++++++ maths +++++

console.log(Math) // => Object [Math] {}
console.log(Math.abs(-5)); // => 5
console.log(Math.round(4.3)); // => 4
console.log(Math.ceil(4.2)); // => 5
console.log(Math.floor(4.9)); // => 4
console.log(Math.min(3,6,2,8)); // => 2
console.log(Math.max(3,6,2,8)); // => 8

console.log((Math.random())); // output value lies [0,1]

const min = 10
const max = 20 
console.log(Math.floor(Math.random()*(max - min + 1)) + min);
  
/**
The Math library comes by default with JavaScript.
 */
