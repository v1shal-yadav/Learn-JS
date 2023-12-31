// falsy values 

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

// others values are truthy values.
// ex- "0", 'false', " ", [], {}, function(){}

// to check [] i.e., 
// if(userEmail.length.length === 0) {
//     console.log("Array is empty");
// }
// const emptyObj = {}
// first make array of objects keys and then use lenght property.
// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }
// print this in browser console.
// false == 0 // => true
// false = '' // => true
// 0 == '' // => true

// Nullish Coalescing Operator (??): null undefined

let val1; 
// val1 = 5 ?? 10 // => 5
// val1 = null ?? 10 // => 10
// val1 = undefined ?? 15 // => 15
// val1 = null ?? 10 ?? 20 // => 10

// console.log(val1)

// Ternary Operator 

// condition ? true: false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")




