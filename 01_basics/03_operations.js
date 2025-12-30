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
console.log();

let firstName = "Sahil";
let lastName = "Singla";

let fullName = firstName + " " + lastName;
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Full Name:", fullName);
console.log();

// some problems with string concatenation
console.log("Concatenation with number '5' + 2 :", '5' + 2); // "52"
console.log("Concatenation with number 5 + '2' :", 5 + '2'); // "52"
console.log("Concatenation with number '5' + 2 + 2 :", '5' + 2 + 2); // "522"
console.log("Concatenation with number 5 + '2' + 2 :", 5 + '2' + 2); // "522"
console.log("Concatenation with number 5 + 2 + '2' :", 5 + 2 + '2'); // "72"
console.log("Concatenation with number '5' + 2 + '2' :", '5' + 2 + '2'); // "522"
console.log("Concatenation with boolean:", "5" + true); // "5true"
console.log();


console.log("Some more Operations and Conversions");

let num1, num2, num3
num1 = num2 = num3 = 2 + 3

let gamecounter = 100
gamecounter++; // post-increment
++gamecounter; // pre-increment
console.log(gamecounter)

console.log()


// Comparison operations
console.log("Comparison Operations:");  

console.log("5 == '5':", 5 == '5'); // true (loose equality)
console.log("5 === '5':", 5 === '5'); // false (strict equality)
console.log("5 != '5':", 5 != '5'); // false (loose inequality)
console.log("5 !== '5':", 5 !== '5'); // true (strict inequality)
console.log("5 < 10:", 5 < 10); // true     
console.log("5 > 10:", 5 > 10); // false
console.log("5 <= 10:", 5 <= 10); // true   
console.log("5 >= 10:", 5 >= 10); // false
console.log()

// some problems with comparison operations
console.log("'2' > 1 : ", '2' > 1); 
console.log("'02' > 1 : ", '02' > 1); 
console.log()

console.log(" null > 0 : ", null > 0);
console.log(" null < 0 : ", null < 0);
console.log(" null == 0 : ", null == 0);
console.log(" null == undefined : ", null == undefined);
console.log(" null != 0 : ", null != 0);
console.log(" null >= 0 : ", null >= 0);
console.log(" null <= 0 : ", null <= 0);
// the reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisonds convert null to a number, treating it as 0.
// that's why null >= 0 is true and null > 0 is false
console.log()

console.log(" undefined == 0 : ", undefined == 0);
console.log(" undefined > 0 : ", undefined > 0);
console.log(" undefined < 0 : ", undefined < 0);
console.log(" undefined >= 0 : ", undefined >= 0);
console.log(" undefined <= 0 : ", undefined <= 0);
console.log(" undefined != 0 : ", undefined != 0);
console.log(" undefined == null : ", undefined == null);
// undefined is converted to NaN in comparisons, which is not equal to any number, including 0.

console.log()
console.log(" undefined === null : ", undefined === null);
// strict equality checks do not perform type coercion, so undefined and null are not equal.
