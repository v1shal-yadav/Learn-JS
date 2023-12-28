// *** scope *** 
// block scope and global scope
if(true) {
    let  a = 10
    const b = 20
    var c = 30
}
// console.log(a); // => a is not defined
// console.log(b);  // => b is not defined
// console.log(c); // => 30

// browser -> inspect -> console -> scope is diffrent from the scope witten in node environment

function one() {
    const username = "Vishal"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error
    two()

}
// one() // => Vishal (only if two() is uncommented, otherwise no output)
// In nested function, child can access parent's variable 

if(true) {
    const username = "vishal"
    if(username === "vishal") {
        const website = "youtube"
        console.log(username + website)
    }
    // console.log(website);  // error
}
// console.log(username); // error

// +++++++ interesting ++++++
addone(5) // no error (hoisting) 
function addone(num) {
    return num + 1
}

// addTwo(5) // Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2
}
