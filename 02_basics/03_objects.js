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

console.log("Person", person); 
console.log();

console.log("name: ", person.name); // Accessing property
console.log("name: ", person['name']); // Accessing property using bracket notation
console.log("age: ", person['age']); // Accessing property using bracket notation
console.log("full name: ", person['full name']); // Accessing property with space in key
// console.log(person.'full name') // Invalid syntax, cannot use dot notation with spaces

console.log()


// symbol 
const sym = Symbol('key1')
const person1 = {
    name: 'Singla',
    age: 23,
    location: 'Chandigarh',
    email: 'singla@gmail.com',
    [sym]: sym,
}
console.log("Person 1", person1); 
console.log();

console.log(person1.name); // Accessing property
console.log(person1[sym]);

console.log()

// Updating properties
person1.name = 'Sahil Singla'; // Updating property
person1.email = 'sahilsingla@gmail.com'
console.log(`Person 1 with updated name ${person1.name} and email ${person1.email}`, person1);

console.log()

Object.freeze(person1); // Freezing the object to prevent further modifications
person1.name = 'New Name'; // This will not change the name
console.log(`Person 1 is freezed now by Object.freeze(person1) and now if i update name as 'New Name' nothing change`, person1); // Still shows 'Sahil Singla' as name

console.log()

const person2 = {
    name: 'Rajiv',
    age: 22,
    location: 'Chandigarh',
    email: 'singla@gmail.com',
    [sym]: sym,
}

person2.greeting = function() {
    console.log('Hello Buddy');
}

person2.greeting1 = function() {
    console.log(`Hello ${this.name}`);
}

console.log("Person 2", person2);
console.log();

console.log("person2.greeting", person2.greeting); // Outputs the function definition
console.log("person2.greeting() : 'Hello Buddy'", person2.greeting()); // Calls the function and outputs 'Hello Buddy'
console.log("person2.greeting1() : `Hello ${this.name}`", person2.greeting1()); // Calls the function and outputs 'Hello Rajiv'

