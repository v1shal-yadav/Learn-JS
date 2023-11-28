let score = "45"
console.log(typeof score) // => string

let valueInNumber = Number (score) // => Number starts with capital letter here. 
console.log(typeof valueInNumber) // => number

let score1 = "45abc" 
let score1InNumber = Number (score1)

console.log(typeof score1InNumber) // => output: number
console.log(score1InNumber) // => output: NaN 

/* conversion 
"33" => 33
"33abc" => NaN
true => 1, false => 0
1 => true, 0 => false
"" => false 
"vishal" => true
null => 0
undefined => NaN
*/

//                 *** operations *** 

let value = 3
let negValue = -value

console.log(negValue) 

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2) // power
console.log(2/2)
console.log(2%2)

let str = "hello"
let str2 = "vishal"

let str3 = str + str2

console.log(1 + 2) // => 3
console.log(1 + "2") // => 12
console.log("1" + 2) // => 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // => 32

console.log(+true) // => 1
console.log(+"") // => 0
// The unary plus operator (+) in JavaScript is designed to convert its operand to a number. 
// It's clearer to use Number() or parseInt() for better readability and to avoid any confusion.

/*  

In JavaScript, when you use the less-than operator (<) to compare values, JavaScript performs a type coercion, 
which means it tries to convert the operands to the same type before making the comparison.

*/
console.log("2" < 1) // => false 
console.log("02" < 1) // => false 

console.log(null > 0) // => false 
console.log(null == 0) // => false 
console.log(null >= 0) // => true

// If "undefined" is used in case of null, then all three will give false as an output. 

/*
The reason is that an equality check == and comparisons > < >= <= work differently. 
Comparisons convert null to a number, treating it as 0. 
That's why (3) null >= 0 is true and (1) null > 0 is false.  */

// strict check ( === ) 

console.log("2" === 2) // => false 













