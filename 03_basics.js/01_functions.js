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

function addTwoNUmbers1(number1, number2) {
    console.log(number1 + number2);
}
// addTwoNUmbers1(4,5)

function addTwoNUmbers(number1, number2) {
    // result = number1 + number2;
    // return result
    return number1 + number2
    console.log("Vishal"); // "vishal" will never be printed
}

const result = addTwoNUmbers(4,1)

// console.log("Result: ", result); // console will return the console only

function loginUserMessge(username) {
    return `${username} just logged in`
}
// console.log(loginUserMessge("Vishal")); // => Vishal just logged in
// console.log(loginUserMessge()); // => undefined just logged in

function loginUserMessge(username = "Sam") {
    if(!undefined) {
        `Please enter a value`
        return
    }
    return `${username} just logged in`
}

function calculateCartPrice(...num1) { // => rest operator
    return num1
}
// console.log(calculateCartPrice(200, 400, 600, 800));

const user = {
    username: "vishal",
    price: 199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user) 
// handleObject({
//     username: "yadav ji", 
//     price: "299"
// })

const myNewArray = [200, 300, 400]

function returnSecondValue(getArray) {
    console.log(getArray[1]);
}
returnSecondValue(myNewArray)
returnSecondValue([200, 300, 400, 500])
