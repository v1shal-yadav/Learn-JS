// reduce 

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0)
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

