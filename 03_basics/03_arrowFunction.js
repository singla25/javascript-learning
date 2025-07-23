// arrow function and this keyboard

const user = {
    username : 'Sahil',
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()

user.username = "Rajiv"
user.welcomeMessage()
console.log()

console.log(this) // in node environment 'this' refers to empty because their is no contest
// In browser: refers to window object

function chai() {
    console.log(this) // when we call it in a function it gives us a very large references
}
chai()

function code(){
    let username = 'Sahil'
    console.log(this.username) //undefined
}
code()
console.log()


// ---------- Arrow Function ----------
console.log('---------- Arrow Function ----------')

const normalFunction = function() {
    let username = 'Rajiv'
    console.log(this.username)
    console.log(this)
}
normalFunction()
console.log()

const arrowFunction = () => {
    let username = 'Rajiv'
    console.log(this.username)
    console.log(this)
}
arrowFunction()
console.log()


// basic syntax of arrow function () => {}
// it can also sore in a variable
const addOne = (num1, num2) => {
    return num1 + num2
}
console.log(addOne(3, 4))


// implicit return
const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(3, 4))

const addThree = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4))
// if we wrap them in {} then we have to write return keyboard but if we wrap in () then no need of return

const forObject = () => ({username: 'Sahil', age: 23})
console.log(forObject())

// const myArray = [1, 2, 3, 4, 5]
// myArray.forEach(() => {})