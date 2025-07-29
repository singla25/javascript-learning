// Maps
// A Map is a built-in JavaScript object that stores key-value pairs and remembers the original insertion order of the keys.

const map = new Map();

map.set("name", "Sahil");
map.set("age", 23);
map.set(true, "Yes, it's true");

console.log(map);
console.log(map.get("name")); // "Sahil"
console.log(map.get(true));   // "Yes, it's true"
console.log()

console.log(map.size); // 3
console.log()

for (let [key, value] of map) {
  console.log(`${key} → ${value}`);
}
console.log()

// map.delete("age");
// console.log(map.has("name")); // checking existence
// map.clear(); // removes all key-value pairs


