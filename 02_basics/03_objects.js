// Objects

// object literals
const person = {
    name: 'Sahil',
    'full name': 'Sahil Singla',
    age: 23,
    location: 'Chandigarh',
    email: 'sahil@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Wednesday', 'Friday'],
}
console.log(person); 
console.log(person.name); // Accessing property
console.log(person['age']); // Accessing property using bracket notation
console.log(person['full name']); // Accessing property with space in key
// console.log(person.'full name') // Invalid syntax, cannot use dot notation with spaces


console.log()


// symbol 
const sym = Symbol('key1')
const person2 = {
    name: 'Singla',
    age: 23,
    location: 'Chandigarh',
    email: 'singla@gmail.com',
    [sym]: sym,
}
console.log(person2);
console.log(person2.name); // Accessing property
console.log(person2[sym]);

console.log()

// Updating properties
person2.name = 'Sahil Singla'; // Updating property
person2.email = 'sahilsingla@gmail.com'
console.log(person2);

Object.freeze(person2); // Freezing the object to prevent further modifications
person2.name = 'New Name'; // This will not change the name
console.log(person2); // Still shows 'Sahil Singla' as name


console.log()


const person3 = {
    name: 'Singla',
    age: 23,
    location: 'Chandigarh',
    email: 'singla@gmail.com',
    [sym]: sym,
}
person3.greeting = function() {
    console.log('Hello Buddy');
}

person3.greeting1 = function() {
    console.log(`Hello ${this.name}`);
}

console.log(person3.greeting); // Outputs the function definition
console.log(person3.greeting()); // Calls the function and outputs 'Hello Buddy'
console.log(person3.greeting1()); // Calls the function and outputs 'Hello Singla'

