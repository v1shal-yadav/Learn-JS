const coding = ["js","ruby", "java", "python", "cpp"] 

// forEach doesn't return any value
// const values = coding.forEach( (item) => {
//     console.log(item);
// })
// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter ( (num) => {
//     return num > 4
// } )

// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books =  [
    { title: 'Book One', genre: 'Fiction', Publish: '1998', edition: '2009'},
    { title: 'Book Two', genre: 'Non-Fiction', Publish: '1994', edition: '2008'},
    { title: 'Book Tjree', genre: 'Comic', Publish: '1996', edition: '2007'},
    { title: 'Book Four', genre: 'Science', Publish: '1995', edition: '2006'},
    { title: 'Book Five', genre: 'History', Publish: '1994', edition: '2005'},
];

const userBooks = books.filter( (bk) => bk.genre === "History")
console.log(userBooks);