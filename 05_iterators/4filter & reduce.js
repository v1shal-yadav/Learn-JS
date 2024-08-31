// filter 
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter ( (num) => {
    return num > 4
} )
// OR 
// const newNums = myNums.filter( (num) => num > 4)

const newNums1 = []
myNums.forEach( (num) => {
    if(num > 4) {
        newNums1.push(num)
    }
})

console.log(newNums1);

const books =  [
    { title: 'Book One', genre: 'Fiction', Publish: '1998', edition: '2009'},
    { title: 'Book Two', genre: 'Non-Fiction', Publish: '1994', edition: '2008'},
    { title: 'Book Tjree', genre: 'Comic', Publish: '1996', edition: '2007'},
    { title: 'Book Four', genre: 'Science', Publish: '1995', edition: '2006'},
    { title: 'Book Five', genre: 'History', Publish: '1994', edition: '2005'},
];

const userBooks = books.filter( (bk) => bk.genre === "History")
console.log(userBooks);

//      *******

// reduce 

// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

const myNum = [1,2,3]

const myTotal = myNum.reduce(function (acc, currVal) {
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc + currVal
}, 0)

// const myTotal = myNum.reduce( (acc, currVal) => acc + currVal, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course", 
        price: 2999
    },
    {
        itemName: "react course", 
        price: 5999
    },
    {
        itemName: "mern course", 
        price: 9999
    },
]
const totalPrice = shoppingCart.reduce( ( acc, item) => item.price + acc, 0) 
console.log(totalPrice);

