/*  for of 

these loops are array specific 
Loops the values of any iterable such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), 
as well as the arguments object, generators produced by generator functions, and user-defined iterables.
*/

//["", "",""]
//[{}, {}, {}]
const arr = [1,2,3,4,5]

// object in the syntax means on which thing loop is  applied.
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char of greetiing is ${greet}`);    
}

//                  *************

/* 
        *** Maps ***

* The Map object holds key-value pairs and remembers the original insertion order of the keys. 
* Map objects are collections of key-value pairs. 
* A key in the Map may only occur once; it is unique in the Map's collection. 
*/

const map = new Map()
map.set('IN', "India")
map.set("USA", "united states of america")
map.set('Fr', "France")

console.log(map);
for (const key of map) {
    console.log(key); // whole map printed sameas (console.log(map))
}
for (const [key, value] of map) {
    console.log(key, ':-', value);
    // object is not iteratable in this way
}

//                  *************

/*  for in loop

The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), 
including inherited enumerable properties.
*/ 

for (const key in object) {
    // code to be executed
}
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
// map is not iteratable using forin loop
for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming) {
    console.log(key); // print the index of array elements
    console.log(programming[key]); // print the element of array
}






