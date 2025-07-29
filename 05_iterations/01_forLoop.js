// for loop
let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log()

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
}
console.log()

for (let i = 0; i <= 10; i++) {
    const num = i;
    if (num == 5) {
        console.log('5 is the best number')
    }
    console.log(num);
}
console.log()

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`)
    for (let j = 1; j <= 10; j++){
        console.log(`Inner loop value: ${j}`)
        console.log(`Inner loop i = ${i} and j = ${j}`)
    }
    console.log()
}

console.log(`Tables`)
for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}`)
    for (let j = 1; j <= 10; j++){
        console.log(i + ' * ' + j + ' = ' + i*j)
    }
    console.log()
}

let myArray = ['flash', 'batman', 'superman']
for (let i = 0; i < myArray.length; i++) {
    const hero = myArray[i];
    console.log(hero)
}
console.log()

console.log(`Break`)
for(let i = 1; i <= 20; i++){
    if (i == 5) {
        console.log(`Detected 5 - break`)
        break
    }
    console.log(`Value of i is ${i}`)
}
console.log()

console.log(`Continue`)
for(let j = 1; j <= 20; j++){
    if (j == 5) {
        console.log(`Detected 5 - Continue`)
        continue
    }
    console.log(`Value of j is ${j}`)
}
console.log()

for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    console.log(`4 Detected and skipped`)
    continue;
  }
  if (i === 6) {
    console.log(`6 detected and loop breaked`)
    break
  }
  console.log(i);
}
console.log()

for (let i = 1; i <= 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log(i);
}