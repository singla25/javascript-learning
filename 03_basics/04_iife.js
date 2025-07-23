// IIFE - Immediately Invoked Function Expression

function normalChai() {
    console.log(`DB CONNECTED`)
}
normalChai(); // here this semi colon is important

// named IIFE
(function IIFEchai() {
    console.log(`DB CONNECTED`)
})();
// syntax of IIFE - (contain function)();
// IIFE is used to resolve the problem caused by global scope pollution

// arrow function in IIFE
(() => {
    console.log(`DB CONNECTED`)
})();
console.log();

((name) => {
    console.log(`${name}, Welcome Bro!`)
})('Sahil');
console.log()

var a = 10;
(function() {
    var a = 20;
    console.log("Inside IIFE:", a); // 20
})();
console.log("Outside IIFE:", a); // 10
console.log()


//     Why Use IIFE?

//     Avoid polluting the global scope
//     Variables declared inside an IIFE are not accessible outside it.

//     Encapsulation
//     Useful for creating a private scope to avoid variable conflicts.

//     Module pattern (before ES6 modules)
//     IIFE was widely used to create modular code before import/export.
