// const str = "hi i am vishal"

// const newStr = str.split(" "); 

// const str1 = newStr.map((word) => {
//     return word[0].toUpperCase() + word.slice(1); 
// })
// const str2 = str1.join(" ")

// console.log(str2);

// let a = 4;
// const fun = function myFunction() {
//   return a * a;
// }

// console.log(fun())

// {
//     let a = 10; 
//     {
//         console.log(a); 
//     }
// }

function x(){
    var a = 20; 
    function y() {
        console.log(a)
    }
    return y; 
}
var z = x(); 
console.log(z); 