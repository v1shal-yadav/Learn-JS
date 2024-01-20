let myName = "vishal    "
let myChannel = "chai     "

console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.vishal = function() {
    console.log(`vishal is present in all objects`);
}
Array.prototype.heyVishal = function() {
    console.log(`Vishal says hello`);
}
heroPower.vishal()
myHeros.vishal()
myHeros.heyVishal()
// heroPower.heyVishal()

// ***Inheritance (prototypal inheritance)

const user = {
    name: "chai", 
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "chaiAurcode         "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUserName.trueLength()
"vishal".trueLength()
"iceTea".trueLength()