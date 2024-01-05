// forEach loop
// The forEach() method of Array instances executes a provided function once for each array element.

const coding = ["js","ruby", "java", "python", "cpp"]

coding.forEach( function (val) {
    console.log(val);
})

coding.forEach( (item) => {
    console.log(item);
})

function printMe (item) {
    console.log(item);
}
coding.forEach(printMe)

// parameters which forEach loop have

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})

// const coding = ["js","ruby", "java", "python", "cpp"] 

// forEach doesn't return any value
const values = coding.forEach( (item) => {
    console.log(item);
})
console.log(values);

