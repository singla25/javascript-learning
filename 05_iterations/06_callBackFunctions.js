// callback function

function greet(name) {
    console.log(`Hello, ${name}`);
}

function processUser(callback) {
    const userName = "Sahil";
    callback(userName); // Calling the callback function
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