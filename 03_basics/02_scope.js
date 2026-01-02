// Scope - {}
// 3 types - global, local, block

// global
let name = "Sahil";
function showName() {
  console.log(name); // ✅ Accessible here
}
showName();
console.log()


// local
function greet() {
  let greeting = "Hello";
  console.log(greeting); // Accessible here
}
greet();
// console.log(greeting); // greeting is not defined
console.log()


// block
{
  let blockVar = "I'm inside a block";
  const blockConst = "Also block scoped";
  var blockVarOld = "var is NOT block scoped";
}
// console.log(blockVar);     // Error
// console.log(blockConst);   // Error
console.log(blockVarOld);  // Works — because `var` is function scoped
console.log()


// all together
let globalVar = "Global";
function example() {
  let localVar = "Local";
  if (true) {
    let blockVar = "Block";
    console.log(globalVar); // ✅
    console.log(localVar);  // ✅
    console.log(blockVar);  // ✅
  }
  // console.log(blockVar); // error
}
example();
// console.log(localVar); // error
console.log()

let a = 200
var c = 50
if(true) {
  let a = 30
  const b = 40
  console.log('Inner a value (Block Scope): ', a);
  console.log(`Sum of a ${a} and b ${b}: a+b ${a + b}`);
}
console.log('Outer a value (Global scope): ', a)
console.log()


// Nested Scope
console.log('Nested Scope')
console.log()

function one() {
  const username = 'Sahil'

  function two() {
    const website = 'Youtube'
    console.log(username);
  }
  // console.log(website);

  two()
}
one()
console.log()

if (true) {
  const username = "Rajiv"
  if (username === 'Rajiv') {
    const website = ' new Youtube Channel'
    console.log(username + website)
  }
  // console.log(website)
}
// console.log(username)
console.log()



console.log('--------------------------')
// +++++++++++++++++ Interesting ++++++++++++++

console.log("Function declared with name: ", addOne(5))
function addOne(num) {
  return num + 1
}
console.log("Function declared with name: ", addOne(5))


// expression - it is like variable which is more powerful and hold anything
// console.log("function declared as a expression: ", addTwo(5)) this will not work
const addTwo = function(num) {
  return num + 2
}
console.log("function declared as a expression: ", addTwo(5))

