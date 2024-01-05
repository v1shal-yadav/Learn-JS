// for

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
/* 
    *** break and continue ***
The break statement "jumps out" of a loop.
The continue statement "jumps over" one iteration in the loop.
*/

// *** while ***

let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`)
    index = index + 2
}

// do-while loop (used rarely) 

let score = 1

do{
    console.log(`score is ${score}`)
    score++
}
while(score <= 10)

// 

