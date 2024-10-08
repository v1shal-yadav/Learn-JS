# Learn-JS
Learning javascript with chai aur code youtube channel

## The JavaScript code is being executed in two-phase, 

* The first one is the memory allocation phase during this all the variables and function definitions get stored inside the memory heap. The JavaScript assigns undefined to each variable in this phase.
* The second one is a thread of the execution phase, during this the code written inside the JavaScript file is being executed.
Each variable holds the value undefined till the program reaches the line where we have assigned that variable. After that line, the variable’s undefined value gets replaced by the original value.

## Note: 
* Using alert/prompt(etc.) will temporarily pause the execution until alert/prompt window being closed.     
* Writing a javascript(not in body) in different file benefits: readibility, modular, browser caching. 

## window object
* The window object represents an open window in a browser. It is browser's objects(not javascript's) & is automatically created by browser. 
* It is global object with lots of properties and methods.   
* console.log("hello") and window.console.log("hello") both will print the same. 

## What is DOM? 
* HTML DOM (Document Object Model) is a hierarchical representation of HTML documents.
* When a web page is loaded, the browser creates a Document Object Model (DOM) of the page. 
* It basically means all the HTML code written and attached with javascript can be accessed inside javascript. 
* All the HTML codes are converted into object inside javascript and are called document(available in window object).
* console.log --> print and console.dir --> documents -> properties and methods.
* dynamic changes/manipulation --> use DOM. 
* If we write javascript in head, we can't access dom elements. 

## Selecting DOM
* selecting with id( if not found --> NULL)
* selecting with class( if not found --> empty HTML collection)
* selecting with tag

## DOM manipulation 
* document.querySelector("myId/myClass/tag") --> return first element
* document.querySelectorAll("myId/myClass/tag") --> return NodeList

## propeties ( get, set, change/update) 
* tagName: return tags for element nodes. 
* innerText: return the text content of element and all its children. 
* innerHTML: return the plain text or HTML contents in the element.
* textContent: return textual content even for hidden elements. 
* DOM tree: Three types of nodes: text nodes, comments, elements(always working in this in DOM) 

## Defination: 
* attributes: additional information inside our element. 
* getAttribute(attr) // to get into the attribute value. 
* setAttribute(attr, value) // to set the attribute value (overwrite)
* style: node.style

## Insert Elements
* let el = document.createElement("div)
* node.append(el) //adds at the end of node (inside)
* node.prepend(el) //adds at the start of node (inside)
* node.before(el) //adds before the node (outside)
* node.after(el) //adds after the node (outside)
* node.classList.add("") 
* node.classList.remove("") 

## Delete Element
* node.remove() //removes the node

## example: 
let newBtn = document.createElement("button"');
newBtn.innerText = "click me!";
console.log (newBtn) ;

let div = document.querySelector("div");
div.append(newBtn) : I

* styling added in the javascript are inline.   

## Events in JS
    The change in the state of an object is known as an Event.
    Events are fired to notify code of "interesting changes" that may affect code execution.
    Pullupitor
    • Mouse events (click, double click etc.)
    • Keyboard events (keypress, keyup, keydown)
    • Form events (submit etc.)
    • Print event & many more

## Event handling: 
* node.event = () => {
    // handle here
}
inline handle < JS handle (greater priority) 

## Event Object
* It is a special object that has details about the event.
* All event handlers have access to the Event Object's properties and methods.

    node.event = (e) => {
    //handle here
    }

    e.target, e.type, e.clientX, e.clientY

* inline handling< JS handling < Event listners. 

## Event Listeners
* node.addEventListener( event, callback) // callback is a function also known as event handler. 
* node.removeEventListener( event, callback)
* Note: the callback reference should be same to remove

# classes and objects: 

## Prototypes in JS: 
* A javaScript object is an entity having state and behavior (properties and method).
JS objects have a special property called prototype(type -> reference to object)
We can set prototype using _ _ proto _ _
* If object & prototype have same method, object's method will be used.
prototype: default object inside object having its own properties and methods.

## Classes in JS:
Class is a program-code template for creating objects.
Those objects will have some state (variables) & some behaviour (functions) inside it.
class MyClass{
    constructor {... }
    myMethod() {... }
}
let myObj = new MyClass() ;

## Inheritance in JS:

* inheritance is passing down properties & methods from parent class to child class.

    class Parent {
    }
    class Child extends Parent {
    }
    ** child is derived class. 

* If Child & Parent have same method, child's method will be used. [Method Overriding]

## super Keyword
The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
super(args) // calls Parent's constructor
super.parentMethod(args )
* In JavaScript, super() is typically called before any other statement within a constructor function, ensuring that the parent class constructor is invoked before initializing properties or executing any other code within the child class constructor.

## Error Handling
* try-catch

    try {
        ... normal code
    } 
    catch (err ) { //err is error object
        ... handling error
    }

## Sync in JS: 

### Synchronous
* Synchronous means the code runs in a particular sequence of instructions given in the program.
* Each instruction waits for the previous instruction to complete its execution.

### Asynchronous
* Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI.
* Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

### Callbacks
* A callback is a function passed as an argument to another function.

### Callback Hell
* Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
    (Pyramid of Doom)
* This style of programming becomes difficult to understand & manage.

``` javascript 
        function getData(dataID, getNextData) {

            setTimeout(() => {
                console.log("data", dataID);
                getNextData(2);
            }, 1000);

        }
        getData(1,() => {
            getData(2, () => {
                getData(3, () => {
                    getData(4)
        })
    })
})

```

### Promises
* Promise is for "eventual" completion of task. It is an object in JS.
* It is a solution to callback hell.
* Three states: pending, resolved/fulfilled, rejected. 

``` javascript 

let promise = new Promise( (resolve, reject) => {....} )
                        Function with 2 handlers
// resolve & reject are callbacks provided by JS. 

.then( ) & .catch()
promise.then ((res) => {....})
promise.catch ((err) => {....})

let promise = new Promise((resolve, reject) => {
    console.log("I am a Promise");
    resolve("success")
    reject("some error occured")
})
```

## 
A JavaScript Promise object can be:
• Pending : the result is undefined
• Resolved : the result is a value (fulfilled)      resolve (result)
• Rejected : the result is an error object          reject (error)

*Promise has state (pending, fulfilled) & some result (result for resolve & error for reiect).

``` javascript 
const getPromise =  () => {
    return new Promise((resolve, reject) => {
        console.log("I am Promise");
        // resolve("success");
        reject("error")
    }) ;
};

let promise = getPromise(); 
promise.then(() => {
    console.log("promise fulfilled");
}); 

promise.catch(() => {
    console.log("promise rejected");
})
```

### Promise chain
``` javascript 

function getData(dataID, getNextData) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            if(getNextData){
                getNextData(2);
            }
            resolve(dataID)
        }, 2000);
    });
}

getData(1)
    .then((res) => {
        return getData(2); 
    })
    .then((res) => {
        console.log(res);
})

```

## Async-Await
async function always returns a promise.
async function myFunc() { .... }
await pauses the execution of its surrounding async function until the promise is settled.

``` javascript 

function api() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    })
}
async function getWeatherData() {
    await api(); // 1st call  
    await api(); // 2nd call

}

async function getAllData () {
    await getAllData(1); 
    await getAllData(2); 
    await getAllData(3); 
}

(async function () {
    await getAllData(1); 
    await getAllData(2); 
    await getAllData(3); 
})();
```

### IIFE : Immediately Invoked Function Expression: 

IIFE is a function that is called immediately as soon as it is defined.
``` javascript 

(function () {
// ...
})();

(() => {
// ..
})();

(async () => {
//...
})();

```

# fetch API (Application Programming Interface); 

* The Fetch API provides an interface for fetching (sending/receiving) resources.
* It uses Request and Response objects.
* The fetch() method is used to fetch a resource (data).
* let promise = fetch( url, [options] )
* During API calls, the page does not reload, and information is updated in real-time.
* API uses GET request to get data. 

### Understanding Terms
AJAX is Asynchronous JS & XML
JSON is JavaScript Object Notation

json() method: returns a second promise that resolves with the result of parsing the response body text as JSON. 
(Input is JSON, output is JS object)

### Requests & Response
HTTP Verbs
Response Status Code
*HTTP response headers also contain details about the responses, such as content type, HTTP status code etc.

# What is a first class function
In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

# What is a first order function
A first-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

const firstOrder = () => console.log("I am a first order function!");

# What is a higher order function
A higher-order function is a function that accepts another function as an argument or returns a function as a return value or both. The syntactic structure of higher order function will be as follows,

``` javascript 
const firstOrderFunc = () =>
  console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);
``` 

You can also call the function which you are passing to higher order function as callback function.

* Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. 

* Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion than using cookies.

* A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs.

* Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

* The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur.

* The clearTimeout() function is used in javascript to clear the timeout which has been set by setTimeout()function before that.

* The clearInterval() function is used in javascript to clear the interval which has been set by setInterval() function.