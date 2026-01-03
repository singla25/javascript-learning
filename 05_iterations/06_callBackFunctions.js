// callback function

function greet(name) {
    console.log(`Hello, ${name}`);
}

function processUser(greeting) {
    const userName = "Sahil";
    greeting(userName); // Calling the callback function
    console.log(userName);
}

processUser(greet);  // Output: Hello, Sahil
console.log()


const numbers = [1, 2, 3];
numbers.forEach(function(num) {
    console.log(num * 2);
});
console.log()


const names = ["Sahil", "Amit"];
const greetings = names.map(function(name) {
    return "Hello " + name;
});
console.log(greetings);
console.log()


setTimeout(() => {
    console.log("Callback after 2 seconds");
}, 2000);
console.log()