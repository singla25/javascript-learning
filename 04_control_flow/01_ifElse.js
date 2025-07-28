// conditional - if/else/elseif
// <, >, <=, >=, ==, !=, ===, !==

if(2 == '2'){
    console.log('2 == "2"')
}

if(2 === '2'){
    console.log('2 === "2"')
} else {
    console.log('2 !== "2" are not equal because of data type')
}
console.log()


const isUserLoggedIn = true
const temperature = 41

if (temperature < 50) {
    console.log('less than 50')
} else {
    console.log('temperature is greater than 50')
}
console.log()


const score = 200
if (score > 100) {
    const power = 'fly'
    console.log(`User power: ${power}`)
}
// console.log(`User power: ${power}`) gives error 
console.log()


// implicit Scope - but not recommended
const balance = 1000
if (balance > 500) console.log('Test1'), console.log('Test2');
console.log()


const marks = 60
if (marks > 50) {
    console.log("Marks are greater than 50")
    console.log("Passed with D grade")
} else if (marks > 70) {
    console.log("Marks are greater than 70")
    console.log('Passed with C grade')
} else if (marks > 80) {
    console.log("Marks are greater than 80")
    console.log('Passed with B grade')
} else if (marks > 90) {
    console.log("Marks are greater than 90")
    console.log('Passed with A grade')
} else {
    console.log("Marks are less than 50")
    console.log('Failed')
}
console.log()


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy")
} else {
    console.log("Not allowed")
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User Logged In")
}

