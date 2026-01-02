// objects - singleton

const tinderUser = new Object();
tinderUser.id = "12345";
tinderUser.name = "John Doe";
tinderUser.age = 30;
tinderUser.location = "New York";
tinderUser.isLoggedIn = false;

console.log("User", tinderUser);
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

console.log("Full Name of Regular User: ", regularUser.fullName.userFullName);
console.log("First Name of Regular User: ", regularUser.fullName.userFullName.firstName);
console.log()

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {obj1, obj2};
console.log("obj1:", obj1);
console.log("obj2:", obj2);
console.log("obj3:", obj3);
console.log()

const obj4 = Object.assign({}, obj1, obj2);
console.log("obj1:", obj1);
console.log("obj2:", obj2);
console.log("By Assigning obj1 and obj2 into obj4:", obj4);
console.log()

const obj5 = Object.assign(obj1, obj2);
console.log("obj1:", obj1);
console.log("obj2:", obj2);
console.log("By Assigning obj2 into obj1 in obj 5:", obj5);
console.log("obj1 === obj5: ", obj1 === obj5);
console.log("obj1:", obj1);
console.log("obj5:", obj5);
console.log()

const obj6 = Object.assign(obj1, obj2);
console.log("obj1:", obj1);
console.log("obj2:", obj2);
console.log("obj2 is assigning to obj1 which is already assigned so nothing happen in obj6:", obj6); // Again, you copy properties from obj2 into obj1.
// But they already have same keys, so nothing really changes.
console.log()

const obj = {5: "e", 6: "f"};
const obj7 = {...obj1, ...obj2, ...obj};
console.log("obj:", obj);
console.log("obj1:", obj1);
console.log("obj2:", obj2);
console.log("obj7:", obj7); // Spread operator creates a new object with properties from both obj1 and obj2.
console.log()

const obj8 = {...obj1, ...obj2};
console.log("obj1:", obj1);
console.log("obj2:", obj2);
console.log("obj8:", obj8); // Spread operator creates a new object with properties from both obj1 and obj2.
console.log("obj1 === obj8:", obj1 === obj8); // obj1 and obj8 are different objects.
console.log()


console.log("Tinder User: ", tinderUser)
console.log()

console.log("Object Keys: ", Object.keys(tinderUser)); // Returns an array of keys in the object
console.log("Object Values: ", Object.values(tinderUser)); // Returns an array of values in the object
console.log("Object Enteries: ", Object.entries(tinderUser)); // Returns an array of key-value pairs in the object
console.log("Check that this particular obkect (tinderUser) hasOwnProperty('name'): ", tinderUser.hasOwnProperty("name")); // Checks if the object has a property named "name"
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
console.log("user 2nd email", users[1].email);
console.log();


// Destructuring objects
console.log("Destructuring objects");
console.log();

const course = {
    courseName: "JavaScript Basics",
    price: '999',
    courseInstructor: "Hitesh Choudhary",
}

console.log("Course: ", course);
console.log();

const {courseInstructor} = course // second way to extract value from object () const {key} = object name )
console.log("Course Instructor: ", courseInstructor); // Extracts the courseInstructor property from the course object
console.log()

const {courseName, price} = course 
console.log(`Course Name : ${courseName} and Price : ${price}`); 
console.log()

const {courseInstructor: instructor} = course; // Renames the extracted property to instructor for this but this thing doesn't effect original object
console.log("Instructor: ", instructor); // Logs the value of instructor
console.log()

console.log("Course: ", course);
console.log();


