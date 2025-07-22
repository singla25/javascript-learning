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

var c = 50
let a = 200
if(true) {
    let a = 30
    const b = 40
    console.log('Inner a value (Block Scope): ', a)
}
console.log('Outer a value (Global scope): ', a)
