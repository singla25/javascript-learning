// higher order array
// A higher-order function is a function that either:
//  - Takes one or more functions as arguments, or
//  - Returns a function as a result.

// map()
const num1 = [1, 2, 3];
const squared = num1.map(num => num * num);
console.log(squared); // [1, 4, 9]
console.log()


// filter()
const num2 = [1, 2, 3, 4, 5];
const even = num2.filter(num => num % 2 === 0);
console.log(even); // [2, 4]
console.log()


// reduce()
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
console.log()

// find()
const users = [{name: 'Sahil'}, {name: 'Amit'}];
const found = users.find(user => user.name === 'Sahil');
console.log(found); // { name: 'Sahil' }
console.log()