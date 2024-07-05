// Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()

// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.

// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// with new keyword you will get new instance. 
// .then() is related to resolve, we get a call back in .then(), it automatically receives an argument.

const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout( function() {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})
// resolve() is used to connect the upper and lower part 
// first the upper portion will run and then lower portion
promiseOne.then(function() {
    console.log('Promise completed');
})

// another syntax to use promise and .then()
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "chai", email: "chai@example.com"})
    }, 1000)
})
promiseThree.then(function(user) {
    console.log(user); // => {username: "chai", email: "chai@example.com"}
})
// whatever parameter will be passed in resolve will be available here (like user) 

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "vishal", password: "123"})
        }
        else {
            reject('ERROR: something went wrong')
        }
    }, 1000)
})
// how to avoid callback hell
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "123"})
        }
        else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
// async/await works exactly same as .then() and .catch(), waits for sometime and move forward otherwise provides error, it don't handle catch gracefully.
// Asynchronous operations are common in JavaScript, such as fetching data from a server, reading a file, or waiting for a timeout.
// Inside an async function, you can use the await keyword to pause the execution of the function until the Promise is resolved. It can only be used inside an async function:

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }
    catch(error) {
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }
    catch(error)  {
        console.log("E: ", error);
    }
}
getAllUsers()
// OR above code written as .then() .catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error))

