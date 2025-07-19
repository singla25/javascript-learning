// Functions

function sayMyName() {
    console.log('S')
    console.log('A')
    console.log('H')
    console.log('I')
    console.log('L')
}

// sayMyName - Reference
// sayMyName() - Executuion
sayMyName()
console.log()

function addTwoNumbers(num1, num2) {
    num = num1 + num2
    console.log(num)
}

addTwoNumbers(5, 10)
addTwoNumbers(4, '5')
addTwoNumbers(4, 'a')
addTwoNumbers(4, null)

const addition = addTwoNumbers(5, 10)
console.log(addition) // undefined, because the console does not return a value
console.log()


// Functions with return statement
// Functions can return a value using the return statement
function add(num1, num2) {
    let result = num1 + num2
    return result
    console.log('Sahil') // This line will not execute because of the return statement
    // after return the function execution stops but if this line is before return, it will execute
}

const result = add(5, 10)
console.log(result) // 15
console.log()

function addNew(num1, num2) {
    return num1 + num2
}
const resultNew = addNew(15, 7)
console.log(resultNew) 
console.log()

function loginUserMessage(username) {
    return `${username} has just logged in`
}

const loginUser = loginUserMessage('Sahil')
console.log(loginUser) // Sahil has just logged in
console.log()

function userMessage(username = 'Sahil') {
    return `${username} has just logged in`
}
const user1 = userMessage()
console.log(user1) // Sahil has just logged in

const user2 = userMessage('Rajiv')
console.log(user2) // Rajiv has just logged in
console.log()



// ...rest operator
function calculateCartPrice(...num) {
    return num
}
const cartValue = calculateCartPrice(100, 200, 300)
console.log(cartValue)
console.log()

function calculatePrice(val1, val2, ...rest) {
    console.log("rest values", rest)
}
const price = calculatePrice(100, 200, 300, 400, 500)
console.log(price) // rest values [ 300, 400, 500 ]
console.log()

const user = {
    username: 'sahil',
    price: 100,
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)

handleObject({
    username: 'rajiv',     
    price: 200,
})
console.log()

const array = [1, 2, 3, 4, 5]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(array))
console.log([100, 200, 300, 400, 500])
console.log()