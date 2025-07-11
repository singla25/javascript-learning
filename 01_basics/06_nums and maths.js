// Numbers

const score = 400

const balance = new Number(1120.876578)
console.log(balance)
console.log("Type of balance: ", typeof balance); // object

console.log("balance.toFixed(2): ", balance.toFixed(2)); // Formatting number to 2 decimal places

console.log("balance.toPrecision(3): ", balance.toPrecision(3)); // Formatting number to 4 significant digits

console.log("balance.toString(): ", balance.toString()); // Converting number to string 

console.log("balance.valueOf(): ", balance.valueOf()); // Getting primitive value of number object

console.log("balance.toExponential(2): ", balance.toExponential(2)); // Formatting number to exponential notation with 2 decimal places

console.log("balance.toLocaleString(): ", balance.toLocaleString()); // Converting number to locale-specific string representation
console.log("balance.toLocaleString(): ", balance.toLocaleString('en-IN')); // Converting number to locale-specific string representation for India
console.log(); console.log()

// +++++++++++++++     Maths     +++++++++++++++

console.log("Math", Math); // Math object
console.log()

console.log("Math.PI: ", Math.PI); // Value of PI
console.log("Math.abs(-10): ", Math.abs(-10)); // Absolute value of -10

console.log("Math.round(4.4): ", Math.round(4.4)); // Rounding 4.6 to nearest integer
console.log("Math.round(4.6): ", Math.round(4.6)); // Rounding 4.6 to nearest integer

console.log("Math.ceil(4.4): ", Math.ceil(4.4)); // Rounding 4.4 up to nearest integer
console.log("Math.floor(4.6): ", Math.floor(4.6)); // Rounding 4.6 down to nearest integer

console.log("Math.min(1, 2, 3): ", Math.min(1, 2, 3)); // Minimum value among 1, 2, and 3
console.log("Math.max(1, 2, 3): ", Math.max(1, 2, 3)); // Maximum value among 1, 2, and 3

console.log("Math.random(): ", Math.random()); // Random number between 0 and 1
console.log("Math.random() * 10: ", Math.random() * 10); // Random number between 0 and 10
console.log("(Math.random() * 10) + 1: ", (Math.random() * 10) + 1); // Random number between 1 and 11
console.log("Math.floor((Math.random() * 10)) + 1: ", Math.floor((Math.random() * 10)) + 1) // Random integer between 1 and 10

const min = 10
const max = 20

console.log("Math.floor(Math.random() * (max - min + 1)) + min: ", Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between 10 and 20
