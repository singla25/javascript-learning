console.log("Operations in JavaScript");

let value = 3
let negValue = -value
console.log("value:", value);
console.log("negative of value:", negValue);
console.log();

// Arithmetic operations
console.log("Arithmetic Operations:");

console.log("Addition:", 5 + 2);
console.log("Subtraction:", 5 - 2);     
console.log("Multiplication:", 5 * 2);
console.log("Division:", 5 / 2);
console.log("Modulus:", 5 % 2); // Remainder of division
console.log("Exponentiation:", 5 ** 3); // 5 raised to the power

console.log();

// String concatenation
console.log("String Concatenation:");

let firstName = "Sahil";
let lastName = "Singla";

let fullName = firstName + " " + lastName;
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Full Name:", fullName);
console.log();

// some problems with string concatenation
console.log("Concatenation with number '5' + 2 :", '5' + 2); // "52"
console.log("Concatenation with number 5 + '2' :", 5 + '5'); // "52"
console.log("Concatenation with number '5' + 2 + 2 :", '5' + 2 + 2); // "522"
console.log("Concatenation with number 5 + '2' + 2 :", 5 + '2' + 2); // "522"
console.log("Concatenation with number 5 + 2 + '2' :", 5 + 2 + '2'); // "72"
console.log("Concatenation with number '5' + 2 + '2' :", '5' + 2 + '2'); // "522"
console.log("Concatenation with boolean:", "5" + true); // "5true
console.log();


console.log("Some more Operations and Conversions");

let num1, num2, num3
num1 = num2 = num3 = 2 + 3

let gamecounter = 100
gamecounter++; // post-increment
++gamecounter; // pre-increment
console.log(gamecounter)