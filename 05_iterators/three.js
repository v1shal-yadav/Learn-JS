// for of ( these loops are array specific)

//["", "",""]
//[{}, {}, {}]
// const arr = [1,2,3,4,5]

// // object in the syntax means on which thing your are applying loop
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`Each char of greetiing is ${greet}`);    
// }
// *** Maps ***
/* The Map object holds key-value pairs and remembers the original insertion order of the keys. 
Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection. 
*/

const map = new Map()
map.set('IN', "India")
map.set("USA", "united states of america")
map.set('Fr', "France")

// console.log(map);
// for (const key of map) {
//     console.log(key); // whole map printed sameas (console.log(map))
// }
for (const [key, value] of map) {
    console.log(key, ':-', value);
    // object is not iteratable in this way
}



