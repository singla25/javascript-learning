let score = 33 
console.log(typeof score);
console.log(typeof(score));
console.log();

console.log("Conversion to Number");
console.log();

console.log("String");
console.log();

let value = "44"
console.log(typeof value);
console.log(typeof(value));

let valueInNumber = Number(value);
console.log(typeof valueInNumber); 
console.log(valueInNumber);
console.log();

console.log("String + Number 44abc (NaN number)");
console.log();

let value1 = "44abc"
console.log(typeof value1);
console.log(typeof(value1));

let valueInNumber1 = Number(value1);
console.log(typeof valueInNumber1); 
console.log(valueInNumber1); // NaN (Not a Number) is returned when the conversion fails
console.log();

console.log("Null");
console.log();

let value2 = null
console.log(typeof value2);
console.log(typeof(value2));

let valueInNumber2 = Number(value2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2); // 0 (null is converted to 0 in number conversion)
console.log();

console.log("Undefined");
console.log();

let value3 = undefined
console.log(typeof value3);
console.log(typeof(value3));

let valueInNumber3 = Number(value3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3); // NaN (undefined is converted to NaN in number conversion)
console.log();

console.log("False");
console.log();

let valueFalse4 = false
console.log(typeof valueFalse4);     
console.log(typeof(valueFalse4));

let valueInNumberFalse4 = Number(valueFalse4);
console.log(typeof valueInNumberFalse4);
console.log(valueInNumberFalse4); // 0 (false is converted to 0 in number conversion)
console.log();

console.log("True");
console.log();

let valueTrue4 = true
console.log(typeof valueTrue4);     
console.log(typeof(valueTrue4));

let valueInNumberTrue4 = Number(valueTrue4);
console.log(typeof valueInNumberTrue4);
console.log(valueInNumberTrue4); // 1 (true is converted to 1 in number conversion)
console.log();

console.log("String");
console.log();

let value5 = "sahil"
console.log(typeof value5);
console.log(typeof(value5));

let valueInNumber5 = Number(value5);
console.log(typeof valueInNumber5);
console.log(valueInNumber5); // NaN (string that cannot be converted to number results in NaN)
console.log();

/*
"33" -> 33
"44abc" -> NaN
null -> 0
undefined -> NaN  
false -> 0
true -> 1
"sahil" -> NaN
*/

console.log();
console.log("Conversion to Bollean");
console.log();

let isLoggedIn = 1
console.log(typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn); // true (1 is truthy)
console.log();

let isLoggedIn1 = ''
console.log(typeof isLoggedIn1);

let booleanIsLoggedIn1 = Boolean(isLoggedIn1);
console.log(typeof booleanIsLoggedIn1);
console.log(booleanIsLoggedIn1); // false (empty string is falsy)
console.log();

let isLoggedIn2 = "1"
console.log(typeof isLoggedIn2);

let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(typeof booleanIsLoggedIn2);
console.log(booleanIsLoggedIn2); // true (non-empty string is truthy)
console.log();

let isLoggedIn3 = "sahil"
console.log(typeof isLoggedIn3);

let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(typeof booleanIsLoggedIn3);
console.log(booleanIsLoggedIn3); // true (non-empty string is truthy)
console.log();

let isLoggedIn4 = null
console.log(typeof isLoggedIn4);

let booleanIsLoggedIn4 = Boolean(isLoggedIn4);
console.log(typeof booleanIsLoggedIn4);
console.log(booleanIsLoggedIn4); // false (null is falsy)
console.log();

let isLoggedIn5 = undefined
console.log(typeof isLoggedIn5);

let booleanIsLoggedIn5 = Boolean(isLoggedIn5);
console.log(typeof booleanIsLoggedIn5);
console.log(booleanIsLoggedIn5); // false (undefined is falsy)
console.log();

/*
1 -> true
"" -> false
"1" -> true
"sahil" -> true
null -> false
undefined -> false
*/

console.log("Conversion to String");
let someNumber = 34
console.log(typeof someNumber);

let stringSomeNumber = String(someNumber);
console.log(typeof stringSomeNumber);
console.log(stringSomeNumber); // "34" (number is converted to string)
console.log();

let someBoolean = true
console.log(typeof someBoolean);

let stringSomeBoolean = String(someBoolean);
console.log(typeof stringSomeBoolean);
console.log(stringSomeBoolean); // "true" (boolean is converted to string)
console.log();

let someNull = null
console.log(typeof someNull);
let stringSomeNull = String(someNull);
console.log(typeof stringSomeNull);
console.log(stringSomeNull); // "null" (null is converted to string)
console.log();  

let someUndefined = undefined
console.log(typeof someUndefined);      

let stringSomeUndefined = String(someUndefined);
console.log(typeof stringSomeUndefined);    
console.log(stringSomeUndefined); // "undefined" (undefined is converted to string)
console.log();

/*
34 -> "34"
true -> "true"
null -> "null"
undefined -> "undefined"
*/

console.log("Imp : Some more Conversion Examples");
console.log(+true); // 1 (unary plus converts boolean to number)
// console.log(true+); // it gives error: Unexpected token '+'

console.log(+false); // 0 (unary plus converts boolean to number)

console.log(+""); // 0 (unary plus converts empty string to number)