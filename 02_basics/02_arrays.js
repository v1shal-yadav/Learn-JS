const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); // => [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const allHeroes = marvel_heroes.concat(dc_heroes) // => [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allHeroes);

const allNewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allNewHeroes);

const another_array = [1,2,3,[4,5,6],[1,[2,3]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array); // => [1, 2, 3, 4, 5, 6, 1, 2, 3]

console.log(Array.isArray("vishal")); // => false 
console.log(Array.from("vishal"));    // => [ 'v', 'i', 's', 'h', 'a', 'l' ]
console.log(Array.from({name: "vishal"})); // => [] (interesting, asked in interview)

const score1 = 100
const score2 = 200
const score3 = 300 
console.log(Array.of(score1,score2,score3));