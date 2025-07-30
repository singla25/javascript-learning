// map - higher order functions

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNums = myNums.map( (num) => num%2 == 0)
console.log(evenNums);
console.log()

const oddNums = myNums.map( (num) => (num%2 != 0))
console.log(oddNums);
console.log()

let newNums = myNums.map((num) => { return num+2 })
console.log(newNums);
console.log()

// channing
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArray = myArray
            .map((num) => num * 10)
            .map((num) => num - 5)
console.log(newArray)
console.log()

newArray = myArray
            .map((num) => num * 10)
            .map((num) => num - 5)
            .filter( (num) => num >= 40)
console.log(newArray)
console.log()