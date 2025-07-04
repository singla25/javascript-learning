"use strict"; 
// treat all JS code as newer version

// alert("Hi Sahil!")
// we are using nodejs not browser

console.log("Hello Sahil!")
console.log(3+3) 
// this is the preferred way to print output in Node.js

console.log("Hello Sahil!"); console.log(3+3) 
// but this is not recommended

/* 
Data Types in JavaScript

Primitive Data Types:

Number
Bigint
String
Boolean
Null -> standalone value, represents empty value
undefined -> variable is declared but not assigned a value
Symbol -> unique and immutable value, used for object properties

Object -> complex data structure, can hold multiple values and functions

*/

let age = 18;
console.log(typeof 3); // number
console.log(typeof age); // number
console.log(typeof "sahil"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object (this is a bug in JS, null is not an object)
console.log(typeof undefined); // undefined


