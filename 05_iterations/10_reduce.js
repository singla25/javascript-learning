// reduce

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
console.log()


const nums = [4, 10, 2, 99, 3];
const max = nums.reduce((acc, curr) => (curr > acc ? curr : acc));
console.log(max); // Output: 99
console.log()


const myNums = [1, 2, 3, 4, 5]
const myTotal = myNums.reduce(function (acc, curr) {
    return acc + curr;
}, 0)
console.log(myTotal)
console.log()


const oldNums = [1, 2, 3, 4, 5]
const oldTotal = oldNums.reduce( (acc, curr) => (acc + curr), 0)
console.log(oldTotal)
console.log()


const newNums = [1, 2, 3]
const newTotal = newNums.reduce( (acc, curr) => { 
    console.log(`acc: ${acc} and curr: ${curr}`);
    return acc + curr}, 0)
console.log(newTotal)
console.log()


const newNum = [1, 2, 3, 4, , 6, 7, 8, 9, 10]
const newValue = newNum.reduce( (acc, curr) => { 
    console.log(`acc: ${acc} and curr: ${curr}`);
    return acc + curr})
console.log(newValue)
console.log()


const newNumAcc = [1, 2, 3, 4, , 6, 7, 8, 9, 10]
const newValueAcc = newNumAcc.reduce( (acc, curr) => { 
    console.log(`acc: ${acc} and curr: ${curr}`);
    return acc + curr}, 3)
console.log(newValueAcc)
console.log()


const cart = [
  { itemName: "Book", price: 200 },
  { itemName: "Pen", price: 20 },
  { itemName: "Notebook", price: 150 },
];
const total = cart.reduce((acc, item) => acc + item.price, 0);
console.log(total); // Output: 370
console.log()

const totalName = cart.reduce((acc, item) => acc + item.itemName, 0);
console.log(totalName);
console.log()
