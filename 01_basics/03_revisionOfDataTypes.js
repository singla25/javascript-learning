console.log("Primitive Data Types")
console.log("1. String");
console.log("2. Number");  
console.log("3. Boolean");
console.log("4. Undefined");
console.log("5. Null"); // Note: typeof null returns "object" due to a historical bug in JavaScript
console.log("6. Symbol");
console.log("7. BigInt"); // typeof BigInt(1234567890123456789012345678901234567890)
console.log()

console.log("Non-Primitive Data Types")
console.log("1. Object"); // { name: "Alice", age: 30 }
console.log("2. Array"); // [1, 2, 3]
console.log("3. Function"); // function() {}
console.log()

console.log("Symbol");
const id = Symbol("12345");
const anotherId = Symbol("12345");

console.log("id:", id); // Symbol(12345)
console.log("anotherId:", anotherId); // Symbol(12345)
console.log("is id === anotherId:", id === anotherId); // false, symbols are unique

const heros = ['Neeraj', 'Rohit', 'Virat'];
let myObj = {
    name : 'Sahil',
    age : 23,
}
const myFunction = function() {
    console.log("Hello, Sahil!");
}