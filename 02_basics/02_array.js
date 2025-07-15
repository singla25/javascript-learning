const marvel_heros = ['thor', 'iron man', 'hulk', 'captain america'];
const dc_heros = ['superman', 'batman', 'wonder'];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); 
// it give array in array

const allHeros = marvel_heros.concat(dc_heros);
console.log("Merged Array using concat", allHeros);
// it merges two arrays and returns a new array

console.log()

console.log("Original Array", marvel_heros);
// it does not change the original array, it returns a new array

console.log()

// Using spread operator to merge arrays

const allHerosSpread = [...marvel_heros, ...dc_heros];
console.log("Merged Array using Spread Operator", allHerosSpread);
// it merges two arrays and returns a new array using spread operator

console.log()

console.log("Original Array after Spread Operator", marvel_heros);
// it does not change the original array, it returns a new array

console.log()

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
const real_another_array = another_array.flat(Infinity);
console.log("Flattened Array", real_another_array);
// it flattens the array to a single level and returns a new array

console.log()

const string = "Sahil";
const convert_to_array_from_string = Array.from(string);
console.log(Array.isArray(string)); // it checks if the variable is an array, returns false for string
console.log("String to Array", convert_to_array_from_string); // it converts a string to an array of characters

console.log()

const object = { name: "Sahil" };
const convert_to_array_from_object = Array.from(object);
console.log(Array.isArray(object)); // it checks if the variable is an array, returns false for object
console.log("Object to Array", convert_to_array_from_object); // it give empty array because object is not iterable we have to tell that make the array of keys or values of the object 

console.log()
let score1 = 100;
let score2 = 200;
let score3 = 300;
const scores = Array.of(score1, score2, score3);
console.log("Scores Array using Array.of", scores);
// it creates a new array with the given elements
console.log()