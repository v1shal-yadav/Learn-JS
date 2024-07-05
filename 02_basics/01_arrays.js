// arrays

const myArr = [2,4,6,9] 
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(2,3,4,5,6)
console.log(myArr2[0]);

// Array methods 
 
myArr.push(8)
myArr.push(9)
myArr.pop()
console.log(myArr);
myArr.unshift(11) // 11 added in the beginning.
myArr.shift() // removes first(0th) element

console.log(myArr.includes(10)); // => true/false.
console.log(myArr.indexOf(10)); // If element not present -1, otherwise index.

const newArr = myArr.join() // join adds all the elements to a string
console.log(newArr);
console.log(typeof newArr); // => string

/*  +++++ slice, splice +++++
* slice do not include the range and also do not manipulate the array.
* splice includes the range and manipulates the array.
*/

console.log("A", myArr); // => A [ 2, 4, 6, 9, 8 ]

const myn1 = myArr.slice(1,3)
console.log(myn1); // => [ 4, 6 ]

console.log("B", myArr); // => B [ 2, 4, 6, 9, 8 ]

const myn2 = myArr.splice(1,3)
console.log(myn2); // [4,6,9]
console.log("C", myArr); // => C [ 2, 8 ]

/**
 * JavaScript arrays are resizable and can contain a mix of different data types.
 * JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes.
 * JavaScript arrays are zero-indexed.
 * JavaScript array-copy operations create shallow copies( share the same references). 
 */

// Array concatenation
const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes); // => [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const allHeroes = marvel_heroes.concat(dc_heroes) // => [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(allHeroes);
// marvel_heroes and dc_heroes arrays will remain unchanged while using concat

// spread syntax
const allNewHeroes = [...marvel_heroes, ...dc_heroes] 
console.log(allNewHeroes); 

// flat method
const another_array = [1,2,3,[4,5,6],[1,[2,3]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array); // => [1, 2, 3, 4, 5, 6, 1, 2, 3]

console.log(Array.isArray("vishal")); // => false 
console.log(Array.from("vishal"));    // => [ 'v', 'i', 's', 'h', 'a', 'l' ]

console.log(Array.from({name: "vishal"})); // => [] (interesting, asked in interview)

// Array.of method 
const score1 = 100
const score2 = 200
const score3 = 300 
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]
