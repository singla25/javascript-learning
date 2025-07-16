// objects - singleton

const tinderUser = new Object();
tinderUser.id = "12345";
tinderUser.name = "John Doe";
tinderUser.age = 30;
tinderUser.location = "New York";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
console.log()

const regularUser = {
    email: "user@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Jane",
            lastName: "Doe",
        }
    }
}

console.log(regularUser.fullName.userFullName);
console.log()

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {obj1, obj2};
console.log(obj1);
console.log(obj2);
console.log("obj3:", obj3);
console.log()

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj1);
console.log(obj2);
console.log("obj4:", obj4);
console.log()

const obj5 = Object.assign(obj1, obj2);
console.log(obj1);
console.log(obj2);
console.log("obj5", obj5);
console.log(obj1 === obj5);
console.log()

const obj6 = Object.assign(obj1, obj2);
console.log(obj1);
console.log(obj2);
console.log(obj6); // Again, you copy properties from obj2 into obj1.
// But they already have same keys, so nothing really changes.
console.log()

const obj = {5: "e", 6: "f"};
const obj7 = {...obj1, ...obj};
console.log(obj1);
console.log("obj7:", obj7); // Spread operator creates a new object with properties from both obj1 and obj2.
console.log(obj1 === obj7); // obj1 and obj7 are different objects.
console.log()

const users = [
    {
        id: "1",
        name: "John Doe",
        age: 30,
        location: "New York",
        isLoggedIn: false,
        email: 'john@gmail.com'
    },
    {
        id: "2",
        name: "Jane Smith",
        age: 25,
        location: "Los Angeles",
        isLoggedIn: true,
        email: 'jane@gmail.com'
    },
    {
        id: "3",
        name: "Alice Johnson",
        age: 28,
        location: "Chicago",
        isLoggedIn: false,
        email: 'alice@gmail.com'
    }
]

users[1].email
console.log(tinderUser)
console.log()

console.log(Object.keys(tinderUser)); // Returns an array of keys in the object
console.log(Object.values(tinderUser)); // Returns an array of values in the object
console.log(Object.entries(tinderUser)); // Returns an array of key-value pairs in the object

console.log(tinderUser.hasOwnProperty("name")); // Checks if the object has a property named "name"
