// Stack and Heap Memory in JavaScript

// Stack Memory: Stores primitive data types
// Heap Memory: Stores objects, arrays, and functions

let myName = "Sahil"; // Primitive type stored in stack memory
let anotherName = myName; // Copying value, both variables point to the same value in stack memory

console.log("myName:", myName);
console.log("anotherName:", anotherName);

anotherName = "Singla"; // Changing anotherName does not affect myName
console.log("After changing anotherName:", anotherName);
console.log("myName:", myName);

// Heap Memory Example

let user1 = {
    email : "user@user",
    upi : "user@upi"
}

let user2 = user1; // Both variables point to the same object in heap memory

console.log("Before changing user2:");
console.log("user1:", user1);
console.log("user2:", user2);

user2.email = "newuser@user"; // Changing user2 affects user1 as they point to the same object
console.log("After changing user2:");
console.log("user1:", user1);
console.log("user2:", user2);