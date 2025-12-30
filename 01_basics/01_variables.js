// variables
// constant

const accountId = 12345
let accountEmail = "sahil@sahil.com"
var accountPassword = "98765"
accountCity = "Chandigarh" // it is also a varible but not prefer
let accountState

// accountId = 1234 - it is not possible because we already define accountId as a contant
console.log(accountId);

accountEmail = "rajiv@rajiv.com"
console.log(accountEmail);

accountPassword = "9876543210"
console.log(accountPassword);

accountCity = "TriCity"
console.log(accountCity);

accountState
console.log(accountState);

// in table format - array
console.log("Account Details");
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// object
const user = {
  name: "Sahil",
  age: 23,
  role: "Developer"
};

console.table(user);

const users = [
  { id: 1, name: "Sahil", age: 23 },
  { id: 2, name: "Aman", age: 25 },
  { id: 3, name: "Ravi", age: 22 }
];

console.table(users);

console.table(users, ["name", "age"]);


// nested
const product = {
  id: 101,
  details: {
    name: "Laptop",
    price: 50000
  }
};

console.table(product);
