// In JavaScript, strings can be decalred using either single quotes (') or double quotes ("). 

const name = "vishal"
const repoCount = 4

console.log(name + repoCount + " value") // => this practise is not recommeded.

// recomeded using `` backticks
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("bgmi") // => String Object:
/*
The String object provides additional methods and properties that can be used with strings.
JavaScript automatically coerces between primitive strings and String objects when necessary,
a concept known as "boxing" and "unboxing."
*/

console.log(gameName[0]); // => b
console.log(gameName.__proto__); // => {}
console.log(gameName.toUpperCase()); // => BGMI
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,2) // charAt(2) will not be inculded in newString
console.log(newString);
// Start or end values less than 0, are treated as 0.

const anotherString = gameName.slice(0,3) // charAt(2) will not be inculded in newString
console.log(anotherString);
// A negative number selects from the end of the string.
/*
const gameName = "hitesh_hc"
gameName.slice(-8,4) => ite
The start parameter is -8, which means it starts from the end of the string.
The end parameter is 4, which means it goes up to, but does not include, the character at index 4.
 */

const newStringOne = "    vishal    "
console.log(newStringOne); //  => (     vishal    )
console.log(newStringOne.trim()); // => vishal (trim will remove the extraspaces)

const url = "https://vishal.com/vishal%20yadav"
console.log(url.replace('%20', '-')); // => https://vishal.com/vishal-yadav

console.log(url.includes('vishal')); // => true
console.log(url.split('i')); // => [ 'https://v', 'shal.com/v', 'shal%20yadav' ]

/*
strings need to be practised and use backticks.
*/


