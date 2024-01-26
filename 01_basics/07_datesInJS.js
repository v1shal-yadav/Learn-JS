// Dates (counted from 1 Jan 1970 in Javascript)

let myDate = new Date() 
console.log(myDate); // => 2023-11-28T10:21:25.659Z
console.log(myDate.toString()); // => Tue Nov 28 2023 10:17:25 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // => Tue Nov 28 2023
console.log(myDate.toLocaleString()); // => 11/28/2023, 10:17:25 AM
console.log(myDate.toLocaleDateString());// => 11/28/2023
console.log(typeof myDate); // => object

let myCreatedDate = new Date(2023, 0, 23) // Months start form (0).
let myCreatedDate1 = new Date("11-01-2001") // Months start form (1).
console.log(myCreatedDate1.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);                // => 1701168105495
console.log(myCreatedDate.getTime());    // => 1701168105495
console.log(Math.floor(Date.now()/1000));// => 1701168105
console.log(myDate.getMonth() + 1); // 1 is added for clarity to user. month 0 based.

myDate.toLocaleString('Default', { 
    weekday:"long,
})
