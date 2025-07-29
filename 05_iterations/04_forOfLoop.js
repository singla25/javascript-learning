// for of loop
console.log('Array')
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}
console.log()


console.log('String')
const name = "Sahil";
for (const char of name) {
  console.log(char);
}

const greetings = 'Hello World!'
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
console.log()


console.log('Maps')

const map = new Map()
map.set('IN', "India");
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map)
console.log()

for (const [i, j] of map) {
  console.log(`${i} -> ${j}`);
}
console.log()


console.log('Object')
const user = { name: "Sahil", age: 23 };
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
console.log()

const myObject = { 'game1': "football", 'game2': "batball", 'game2': "batball" };
for (const [i, j] of Object.entries(myObject)) {
  console.log(`${i}: ${j}`);
}

for (const [i] of Object.entries(myObject)) {
  console.log(`${i}: Keys`);
}

for (const [j] of Object.entries(myObject)) {
  console.log(`${j} : Values`);
}
console.log()
