const userEmail = 'sahil@gmail.com' //string == true value
if (userEmail) {
    console.log('Got User Email')
} else {
    console.log("Don't have user email")
}
console.log()

const email = ''  //empty == false
if (email) {
    console.log('Got User Email')
} else {
    console.log("Don't have user email")
}
console.log()

const array = []  //empty == true
if (array) {
    console.log('Got User Email')
} else {
    console.log("Don't have user email")
}
console.log()

// falsy values - false, 0, -0, BigInt On, "", null, undefined
// truthy values - "0", 'false', " ", [], {}, function(){}, all except falsy values

if (array.length === 0) {
    console.log("Array is empty")
}
console.log()

const object = {}
if (Object.keys(object).length  === 0) {
    console.log('Object is empty')
}

// false == 0 true
// false == '' true
// 0 == '' true