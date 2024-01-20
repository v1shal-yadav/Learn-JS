const user = {
    username: "vishal",
    logInCount: 8, 
    signedIn: true,

    getUserDetails: function() {
        console.log(`Username is ${this.username}`);
        console.log(this)
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// constructor function (new) 
// const promise = new Promise() 
// const date = new Date() 

function User(username, logInCount, isLoggedIN) {
    this.username = username
    this.logInCount = logInCount
    this.isLoggedIN = isLoggedIN
    // varible      passed value

    return this// object passed on, anyone can acces the whole value
}

const userOne = new User("vishal", 12, true)
const userTwo = new User("chaiAurCode", 25, true)

console.log(userOne);
console.log(userTwo);

/*
Empty object created(know as instance)
Constructor function is called because of new keyword
all arguments are injects inside this 
are availble inside function

constructor property is reference about itself
*/

