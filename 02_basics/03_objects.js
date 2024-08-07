/* Objects can be declared by two types: 

    1. literals(no singleton formed) and 
    2. constructors(singleton formed)
    
objects.create => this is constructor method
Mostly values are accessed using dots, but there are some cases we have to use [] we don't have any another option.
*/

// const tinderUser = new Object() // => singleton object
const tinderUser = {} // => non-singleton

// console.log(tinderUser); // => {} in both the above two cases

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "vishal@gmail.com",
    fullname: {
        userFullName: {
            fistname: "vishal",
            lastName: "yadav",
        }
    }              
}
// console.log(regularUser.fullname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {2: 'a', 3: 'b'}

const obj3 = {obj1, obj2}
console.log(obj3); // => { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'a', '3': 'b' } }
// obj1, obj2 both remains unchanged.

const obj4 = Object.assign(obj1, obj2) 
console.log(obj4); // => { '1': 'a', '2': 'a', '3': 'b' }
// obj1 will change but not obj2. 

/*
Object.assign modifies the target object (obj1 in this case) by merging properties from the source objects (obj2). When there's a conflict (e.g., both objects have a property with the same key), the value from the last object in the argument list (obj2 in this case) overwrites the existing value.
*/

const obj5 = Object.assign({}, obj1, obj2)//=> Object.assign(target, source),this can be seen in production grade codes.
console.log(obj5); // => // => { '1': 'a', '2': 'a', '3': 'b' }
// obj1, obj2 both remains unchanged.

// console.log( obj4 === obj5); // = false
// console.log( obj1 === obj4) // => true

const obj6 = {...obj1, ...obj2}
console.log(obj6); // => { '1': 'a', '2': 'a', '3': 'b' }
// obj1, obj2 both remains unchanged.
  
const users = [
    {
        email: "1@gmail.com"
    },
    {
        email: "1@gmail.com"
    },
    {
        email: "1@gmail.com"
    },
    {
        email: "1@gmail.com"
    },
]

// console.log(Object.keys(tinderUser)); // => [ 'id', 'name', 'isLoggedIn' ], output datatype is array
// console.log(Object.values(tinderUser)) // => [ '123abc', 'sammy', false ], output datatype is array
// console.log(Object.entries(tinderUser)) // => [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ], output datatype is array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // => true

const course = {
    coursename: "javascript",
    price: "999",
    courseInstructorName: "hitesh"      
}
console.log(course.courseInstructorName);

// *** object destructurng **** 
// array is also destructured, but it is very rare.

const { courseInstructorName: instructor} = course
console.log(instructor);

// the below written code is almost like json.
// {
//     "name": "hitesh"
//     "coursename": "Js in hindi"
//     "price": "free"
// }