const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
// map is not iteratable using forin loop
for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming) {
    console.log(key); // print the index of array elements
    console.log(programming[key]); // print the element of array
}

