const str = "hi i am vishal"

const newStr = str.split(" "); 

const str1 = newStr.map((word) => {
    return word[0].toUpperCase() + word.slice(1); 
})
const str2 = str1.join(" ")

console.log(str2);
