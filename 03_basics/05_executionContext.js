// There are 3 main types of execution contexts:
// -Global Execution Context (GEC)
// -Function Execution Context (FEC)
// -Eval Execution Context (very rare; from eval())


// How JavaScript Executes Code (Phases)
// -Global Phase
// -Creation Phase(Memory Phase)
// -Execution Phase 

// Try this in snippet in google chrome to see visual relization
// function one() {
//     console.log('one')
// }

// function two() {
//     console.log('two')
// }

// function three() {
//     console.log('three')
// }

// one();
// console.log();

// two();
// console.log();

// three();
// console.log();


function one() {
    console.log('one')
    two()
}

function two() {
    console.log('two')
    three()
}

function three() {
    console.log('three')
}

one();
console.log();

two();
console.log();

three();
console.log();