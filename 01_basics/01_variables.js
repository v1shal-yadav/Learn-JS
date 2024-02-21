const accountId = 1243
let accountEmail = "vishal@gmail.com"
var accountPassword = "weer@#23"
accountCity = "varanasi" // this is not a standard practise
let accountState // => console.log(accountState) => undefined

// accountId = 2 // this is not allowed 
   
accountEmail = "yadav@gmail.com"
accountPassword = "r234f2@@@"
accountCity = "Delhi"

console.log("accountPassword")
console.table([accountEmail, accountId, accountPassword, accountCity, accountState]) 

/*
let and const are used now a days.
Prefer not to use var beacause of issue in block scope and functional scope.
A variable is undefined if it is declared but not assigned any value.
You may or may not use semi-colon in javascript.
Javascript engine is hidden inside browser.
code readability should be high.
Documentation -> tc39(official by ECMA) and mdn (by mozilla)
To master javascript, master objects and web events. 

 The var keyword was used in all JavaScript code from 1995 to 2015. The let and const keywords were added to JavaScript in 2015. 
 The var keyword should only be used in code written for older browsers.
 variable can be redeclared with var but not with let 
 var can be accessed using window and let is deleted as code execution ends(saves memory)

 In JavaScript, both are related to memory space. If the variable name which is being accessed doesn’t exist in memory space then it would be not defined, and if exists in memory space but hasn’t been assigned any value till now, then it would be undefined.
 Everything which gets a space in memory will contain undefined until we assign a value to that memory space.
*/
