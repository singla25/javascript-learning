// arrow function and this keyboard

const user = {
    username : 'Sahil',
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to new life`)
        console.log(this)
    }
}
user.welcomeMessage()
console.log()

user.username = "Rajiv"
user.welcomeMessage()
console.log()

console.log(this) // In node environment 'this' refers to empty because their is no contest
// In browser: refers to window object
console.log()

function chai() {
    console.log(this) // when we call it in a function it gives us a very large references
}
chai()
console.log()


function code(){
    let username = 'Sahil'  // local defined
    console.log(this.username) //undefined
}
code()
console.log()

const normalFunction = function() {
    let username = 'Rajiv'
    console.log(this.username)
}
normalFunction()
console.log()

// ---------- Arrow Function ----------
console.log('---------- Arrow Function ----------')

const arrowFunction = () => {
    let username = 'Rajiv'
    console.log(this.username)
}
arrowFunction()
console.log()

// basic syntax of arrow function () => {}
// it can also store in a variable
const add = (num1, num2) => {
    return num1 + num2
}
console.log(add(3, 4))

// implicit return
const addOne = (num1, num2) => num1 + num2
console.log(addOne(3, 4))

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4))
// if we wrap them in {} then we have to write return keyboard but if we wrap in () then no need of return
console.log();

const forObject = () => ({username: 'Sahil', age: 23})
console.log(forObject())
console.log()


// difference b/w normal function and arrow function
const normalfunction = function() {
    let username = 'Sahil'
    console.log(this.username)
    console.log(this)
}
normalfunction()
console.log()

const arrowfunction = () => {
    let username = 'Sahil'
    console.log(this.username)
    console.log(this)
}
arrowfunction()
console.log()
// Arrow functions do NOT have their own this.
// They inherit this from the surrounding lexical scope (where the function was defined).

const user1 = {
  name: "Sahil",
  greet: function () {
    console.log("Hi, my name is", this.name);
  }
};
user1.greet(); // "Hi, my name is Sahil"

const user2 = {
  name: "Sahil",
  greet: () => {
    console.log("Hi, my name is", this.name);
  }
};
user2.greet(); // "Hi, my name is undefined"




// const myArray = [1, 2, 3, 4, 5]
// myArray.forEach(() => {})