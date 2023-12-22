// *** objects *** 

const JsUser = {
    name: "vishal", // => name is treated as a string "name"
    age: 22,
    location: "varanasi", 
    email: "vishal@email.com"
    isLoggedIn: false,
    lastLogInDays: ["monday", "tuesday"]
}
console.log(JsUser.email)
console.log(JsUser[email])




/*
objects can be declared by two types 

literal(no singleton formed) and constructors(singleton formed)
objects.create => this is constructor method
*/