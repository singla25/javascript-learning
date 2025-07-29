// for .. in
const user = {
  name: "Sahil",
  age: 23,
  city: "Chandigarh"
};

for (let key in user) {
  console.log(`${key} → ${user[key]}`);
}
console.log()

const myObject = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by apple'
}
for (let key in myObject) {
    console.log(`${key} -> ${myObject[key]}`);
}
console.log()


const programming = ['cpp', 'java', 'php', 'python']
for (let key in programming) {
    console.log(`${key} -> ${programming[key]}`)
}
console.log()


// const map = new Map()
// map.set('IN', "India");
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// for (const key in map) {
//   console.log(key);
// }
// console.log()