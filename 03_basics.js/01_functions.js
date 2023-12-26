// *** functions *** 
function sayMyName() {
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}
// sayMyName // => function refrence 
// sayMyName() // => function execution 

// function addTwoNUmbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNUmbers(4,5)

// function addTwoNUmbers(number1, number2) {
//     // result = number1 + number2;
//     // return result
//     return number1 + number2
//     console.log("Vishal"); // "vishal" will never be printed
// }

// const result = addTwoNUmbers(4,1)

// console.log("Result: ", result); // console will return the console only

function loginUserMessge(username) {
    return `${username} just logged in`
}
console.log(loginUserMessge("Vishal")); // => Vishal just logged in
console.log(loginUserMessge()); // => undefined just logged in
