// Nullish Coalscing Operator (??): null undefined
console.log("Nullish Coalscing Operator (??)")
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // 👉 "Guest"
console.log()


let count = 0;
let value = count ?? 10;
console.log(value); // 👉 0 (not null or undefined)
console.log()


function getRating(rating) {
  return rating ?? "No rating available";
}
console.log(getRating(0));    // 0
console.log(getRating(null)); // "No rating available"
console.log(getRating(undefined)); // "No rating available"
console.log()


// Ternary Operator - condition ? true statement : false statement
console.log("Ternary Operator")

let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"
console.log()


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
console.log()


let marks = 75;
let grade;
if (marks >= 50) {        // Using if...else
  grade = "Pass";
  console.log(grade)
} else {
  grade = "Fail";
  console.log(grade)
}

let grade2 = (marks >= 50) ? "Pass" : "Fail";   // Same with ternary
console.log(grade2)
console.log()


// nested ternary
let score = 85;
let result = (score >= 90) ? "A+" :
             (score >= 75) ? "A" :
             (score >= 50) ? "B" : "Fail";

console.log(result); // "A"
console.log()