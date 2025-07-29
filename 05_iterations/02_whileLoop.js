// while loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
console.log()

let j = 0;
while (j < 10) {
  j++;

  if (j === 3) continue;  // Skip 2
  if (j === 8) break;     // Stop at 4

  console.log(j);
}
console.log()


let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2
}
console.log()

let myArray = ['Rajiv', 'Rahul', 'Raghav', 'Daljit', 'Uday', 'Maanik'];
let arr = 0;
while (arr < myArray.length) {
    console.log(`My friend ${myArray[arr]}`);
    arr++;
}
console.log()



