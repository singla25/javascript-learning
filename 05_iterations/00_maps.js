// Maps
// ----------------- Syntax --------------------
// array.map((element, index, array) => {
//     return newValue;
// });

// A Map is a built-in JavaScript object that stores key-value pairs and remembers the original insertion order of the keys.


// ----------------- Object --------------------
console.log("Map in Object");
const users = [
  { name: "Sahil", age: 23 },
  { name: "Rajiv", age: 25 }
];
const names = users.map(user => user.name);
console.log(names); // ["Sahil", "Rajiv"]
console.log();

const map = new Map();
map.set("name", "Sahil");
map.set("age", 23);
map.set(true, "Yes, it's true");
console.log("Map: ", map);
console.log("Map's Name: ",map.get("name")); // "Sahil"
console.log("Map true Value: ", map.get(true));   // "Yes, it's true"
console.log("Size of Map:", map.size); // 3
console.log()

for (let [key, value] of map) {
  console.log(`${key} → ${value}`);
}
console.log()

// map.delete("age");
// console.log(map.has("name")); // checking existence
// map.clear(); // removes all key-value pairs



// ----------------- Array --------------------
console.log("Array to Object by Map");

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => {
  return num * 2;
});
console.log(typeof doubled);
console.log();



// ----------------- Map Chain --------------------
console.log("Map Chain");
const nums = [1, 2, 3, 4, 5];
const result = nums
  .map(num => num * 2)
  .map(num => num + 1);

console.log(result); // [3, 5, 7, 9, 11]
