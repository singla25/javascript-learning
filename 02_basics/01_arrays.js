// Arrays

const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, "Sahil", true, null, undefined, { name: "Sahil" }];
const arr3 = new Array(1, 2, 3, 4, 5);

console.log("array: ", arr);

arr.push(6); // Adds 6 to the end of arr
console.log("6 is pushed in array:", arr); // [1, 2, 3, 4, 5, 6]
console.log()

arr.pop(); // Removes the last element from arr
console.log("Last element is popped from array:", arr); // [1, 2, 3, 4, 5]
console.log()

arr.unshift(0); // Adds 0 to the beginning of arr
console.log("0 is unshifted in array:", arr); // [0, 1, 2, 3, 4, 5]
console.log()

arr.unshift(9); // Adds 9 to the beginning of arr
console.log("9 is unshifted in array:", arr); // [0, 1, 2, 3, 4, 5]
console.log()
// unshift adds elements to the beginning of the array and shift every element to the right

arr.shift(); // Removes the first element from arr
console.log("First element is shifted from array:", arr); // [1, 2, 3, 4, 5]
console.log()
// shift removes the first element from the array and shifts every element to the left

// questionaries methods
console.log("includes(3):", arr.includes(3)); // true
console.log("indexOf(3):", arr.indexOf(3)); // 2
console.log("indexOf(6):", arr.indexOf(6)); // -1 (not found)
console.log()

const newArr = arr.join();
console.log("join():", newArr); // "1,2,3,4,5"
console.log()

const newArr2 = arr.slice(1, 3); // Extracts elements from index 1 to 2 (3 is not included)
console.log("slice(1, 3) array:", newArr2); // [2, 3]
console.log("original arr: ", arr); // [1, 2, 3, 4, 5]
console.log()
// slice does not modify the original array, it returns a new array with the extracted elements

const newArr3 = arr.splice(1, 2); // Removes 2 elements starting from index 1
console.log("splice(1, 2) array:", newArr3); // [2, 3]
console.log("original arr after splice: ", arr); // [1, 4, 5]
console.log()
// splice modifies the original array by removing elements and returns the removed elements

