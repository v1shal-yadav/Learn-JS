const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num) => {return num + 10})

// the map method is used primarily with arrays to iterate over each element and transform them based on a callback function. It creates a new array populated with the results of calling a provided function on every element in the calling array.

// chaining
const newNums = myNumbers.map( (num) => num*10).map( (num) => num+1 ).filter( (num) => num >= 40)

console.log(newNums);