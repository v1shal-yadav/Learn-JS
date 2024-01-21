function setUserName(username) {
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password) {
    setUserName.call(this, username) 
// call hamara current executionn context kisi or ko pass kr deta hai
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
/*
window = {this = window}
node = {}
*/