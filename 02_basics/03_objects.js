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
console.log(JsUser.greetings()); // => [Function (anonymous)]

/*
objects can be declared by two types 

literal(no singleton formed) and constructors(singleton formed)
objects.create => this is constructor method
*/