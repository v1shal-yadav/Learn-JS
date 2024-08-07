/* 
        *** primitive *** 

call by value, changes happens to copy.

7 types: null, number, string, symbol, BigInt, Boolean, undefined

JavaScript is a dynamically typed language, which means that data types of variables are determined by the value 
they hold at runtime and can change throughout the program as we assign different values to them.
*/

const score = 100
const scoreValue = 100.3 

const isLoggedIn = true
const outsideTemp = null

let userEmail 

const bigNumber = 124962694518n // using n will make it BigInt

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID) // false

/* 
        *** Reference (Non - primitive) *** 
    
            Arrays, objects, functions. 

datatypes of these non-primitve datatypes is object and of function is object function.

 */

const heros = ["shaktiman", "naagraj", "doga"]

let myInfo = {
    name: "vishal", 
    age: 22
    // whatever is iniside this {}curlybraces is an oject, it can be of any datatype and it can be another object also.
}

const myFunction = function() {
    console.log("hello vishal")
}

//          ++++++++++

// stack(primitve) & heap(non-primitive) 

let myEmail = "vishal@gmail.com"
let newEmail = myEmail 
newEmail = "vishal@outlook.com"

console.log(myEmail) // vishal@gmail.com
console.log(newEmail) // vishal@outlook.com 

let userOne = {
    email: "vishal@google.com"
}
let userTwo = userOne 
userTwo.email = "vishal@apple.com"

console.log(userOne.email) // vishal@apple.com
console.log(userTwo.email) // vishal@apple.com



