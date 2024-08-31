const user = {
    username: "vishal",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage() // output ↓↓
/*
Sam, welcome to website
{
  username: 'Sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

console.log(this); // => {} (empty object)
// In node environment {} is golbal object and in browswer window is global object.
// The window object represents the global context for the JavaScript code running in a browser.

function chai() {
    let username = "vishal"
    console.log(this); // will get so many values
    console.log(this.username) // => undefined
}
chai()
const chai = function () {
    let username = "vishal"
    console.log(this); // will get so many values
    console.log(this.username) // => undefined
}
chai()

const chai =  () =>  {
    let username = "vishal"
    console.log(this); // => {}
    console.log(this.username) // => undefined
}
chai()

// () => {} // basic syntax

const addTwo = (num1, num2) => {
    return num1 + num2
}
// when using curly braces return needed i.e. explicit return
const addTwo1 = (num1, num2) => num1 + num2 // implicit return 
const addTwo2 = (num1, num2) => {username: "vishal"} // undefined
const addTwo3 = (num1, num2) => ({username: "vishal"}) //{ username: 'vishal' }
// Without the parentheses, it would be interpreted as a block and not an object literal.

console.log(addTwo(4,5)); 