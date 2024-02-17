# Learn-JS
Learning javascript with chai aur code youtube channel

# Note: 
* Using alert/prompt(etc.) will temporarily pause the execution until the alert/prompt window being closed.     
* Writing a javascript(not in body) in different file benefits: readibility, modular, browser caching. 

# window object
* The window object represts an open window in a browser. It is browser's objects(not javascript's) & is automatically created by browser. 
* It is global object with lots of properties and methods.   
* console.log("hello") and window.console.log("hello") both will print the same. 

# What is DOM? 
* When a web page is loaded, the browser creates a Document Object Model (DOM) of the page. 
* It basically means all the HTML code written and attached with javascript can be accessed inside javascript. 
* All the HTML codes are converted into object inside javascript and are called document(available in window object).
* console.log --> print and console.dir --> documents -> properties and methods.
* dynamic changes/manipulation --> use DOM 
* If we write javascript in head, we can't access dom elements. 

# Selecting DOM
* selecting with id( if not found --> NULL)
* selecting with class( if not found --> empty HTML collection)
* selecting with tag

# DOM manipulation 
* document.querySelector("myId/myClass/tag") --> return first element
* document.querySelectorAll("myId/myClass/tag") --> return NodeList

# propeties ( get, set, change/update) 
* tagName: return tags for element nodes. 
* innerText: return the text content of element and all its children. 
* innerHTML: return the plain text or HTML contents in the element.
* textContent: return textual content even for hidden elements. 
* DOM tree: Three types of nodes: text nodes, comments, elements(always working in this in DOM) 

# Defination: 
* attributes: additional information inside our element. 
* getAttribute(attr) // to get into the attribute value. 
* setAttribute(attr, value) // to set the attribute value (overwrite)
* style: node.style

# Insert Elements
* let el = document.createElement("div)
* node.append(el) //adds at the end of node (inside)
* node.prepend(el) //adds at the start of node (inside)
* node.before(el) //adds before the node (outside)
* node.after(el) //adds after the node (outside)
* node.classList.add("") 
* node.classList.remove("") 

# Delete Element
* node.remove() //removes the node

# example: 
let newBtn = document.createElement("button"');
newBtn.innerText = "click me!";
console.log (newBtn) ;

let div = document.querySelector("div");
div.append(newBtn) : I

* styling added in the javascript are inline.   

# Events in JS
    The change in the state of an object is known as an Event.
    Events are fired to notify code of "interesting changes" that may affect code execution.
    Pullupitor
    • Mouse events (click, double click etc.)
    • Keyboard events (keypress, keyup, keydown)
    • Form events (submit etc.)
    • Print event & many more

# Event handling: 
* node.event = () => {
    // handle here
}
inline handle < JS handle (greater priority) 

# Event Object
* It is a special object that has details about the event.
* All event handlers have access to the Event Object's properties and methods.

    node.event = (e) => {
    //handle here
    }

    e.target, e.type, e.clientX, e.clientY

* inline handling< JS handling < Event listners. 

# Event Listeners
* node.addEventListener( event, callback) // callback is a function also known as event handler. 
* node.removeEventListener( event, callback)
* Note: the callback reference should be same to remove

# classes and objects: 

# Prototypes in JS: 
* A javaScript object is an entity having state and behavior (properties and method).
JS objects have a special property called prototype(type -> reference to object)
We can set prototype using _ _ proto _ _
*If object & prototype have same method, object's method will be used.
prototype: default object inside object having its own properties and methods.

# Classes in JS
Class is a program-code template for creating objects.
Those objects will have some state (variables) & some behaviour (functions) inside it.
class MyClass{
    constructor {... }
    myMethod() {... }
}
let myObj = new MyClass() ;

# Inheritance in JS:

* inheritance is passing down properties & methods from parent class to child class.

    class Parent {
    }
    class Child extends Parent {
    }
    ** child is derived class. 

* If Child & Parent have same method, child's method will be used. [Method Overriding]

# super Keyword
The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
super(args) // calls Parent's constructor
super.parentMethod(args )
