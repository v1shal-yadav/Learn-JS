// *** objects *** 

const mySym = Symbol("key1")

const JsUser = {
    name: "vishal", // => name is treated as a string "name"
    "full name": "vishal yadav",
    age: 22,
    location: "varanasi", 
    email: "vishal@email.com",
    isLoggedIn: false,
    lastLogInDays: ["monday", "tuesday"],
    [mySym]: "myKey1"  // => syntax for using symbol in objects
};   

console.log(JsUser.email) // => vishal@email.com
console.log(JsUser["email"]) // => vishal@email.com
console.log(JsUser["full name"]) // => vishal yadav
console.log(JsUser[mySym]) // => myKey1

JsUser.email = "vishal@google.com"
console.log(JsUser.email); // => vishal@google.com

// Object.freeze(JsUser)
JsUser.email = "vishal@chatGPT.com"
console.log(JsUser.email); // => vishal@google.com
console.log(JsUser);

/* 
{
  name: 'vishal',
  'full name': 'vishal yadav',
  age: 22,
  location: 'varanasi',
  email: 'vishal@google.com',
  isLoggedIn: false,
  lastLogInDays: [ 'monday', 'tuesday' ],
  [Symbol(key1)]: 'myKey1'
}
*/

JsUser.greetings = function() {
    console.log("Hello, JS user");
}

console.log(JsUser.greetings); // => [Function (anonymous)]
console.log(JsUser.greetings()); // => Hello, JS user
                                       undefined

JsUser.greetingsTwo = function() {
  console.log(`Hello, JS user ${this.name} `);
}
console.log(JsUser.greetingsTwo()); // => Hello, JS user vishal 
                                          undefined

/*    

In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.
*/

