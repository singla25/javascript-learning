// String

const name = "Sahil"
const repoCount = 10

console.log(name + repoCount); // Concatenation of string and number
// it is old way not recommended

console.log(``) // Backtick string
// Benefits of backtick strings is that it allows for string interpolation
// it providea us a place holder ${variableName} to insert variables into the string
console.log(`My name is ${name} and I have ${repoCount} repositories.`);


const otherName = new String("Singla");

console.log(otherName); // String object
console.log("Type of otherName: ", typeof otherName); // object

console.log(otherName[0]); // Accessing first character of string object
console.log(otherName.__proro__); // Accessing prototype of string object

console.log("length of otherName: ", otherName.length); // Length of string object

console.log("otherName.toUpperCase(): ", otherName.toUpperCase()); // Converting string object to uppercase
console.log("otherName.toLowerCase(): ", otherName.toLowerCase()); // Converting string object to lowercase

console.log("otherName.charAt(0): ", otherName.charAt(0)); // Accessing first character of string object using charAt method
console.log("otherName.indexOf('S'): ", otherName.indexOf("S")); // Finding index of character 'S' in string object
console.log("otherName.lastIndexOf('S'): ", otherName.lastIndexOf("S")); // Finding last index of character 'S' in string object

console.log("otherName.includes('S'): ", otherName.includes("S")); // Checking if character 'S' is present in string object
console.log("otherName.startsWith('S'): ", otherName.startsWith("S")); // Checking if string object starts with character 'S'
console.log("otherName.endsWith('a'): ", otherName.endsWith("a")); // Checking if string object ends with character 'a'

console.log("otherName.slice(0, 3): ", otherName.slice(0, 3)); // Slicing string object from index 0 to 3
console.log("otherName.substring(0, 3): ", otherName.substring(0, 3)); // Substring of string object from index 0 to 3

console.log("otherName.split('i'): ", otherName.split("i")); // Splitting string object by character 'i'
console.log("otherName.replace('S', 's'): ", otherName.replace("S", "s")); // Replacing character 'S' with 's' in string object

console.log("otherName.trim(): ", otherName.trim()); // Trimming whitespace from string object
console.log("otherName.trimStart(): ", otherName.trimStart()); // Trimming whitespace from start of string object
console.log("otherName.trimEnd(): ", otherName.trimEnd()); // Trimming whitespace from end of string object

console.log("otherName.repeat(3): ", otherName.repeat(3)); // Repeating string object 3 times

console.log("otherName.concat(' my name')): ", otherName.concat(' my name')); // Concatenating string object with another string

console.log("otherName.padStart(10, '0'): ", otherName.padStart(10, '0')); // Padding string object with '0' at the start to make it 10 characters long
console.log("otherName.padEnd(10, '0'): ", otherName.padEnd(10, '0')); // Padding string object with '0' at the end to make it 10 characters long

console.log("otherName.match(/i/g): ", otherName.match(/i/g)); // Matching string object with a regular expression (not used here, just for demonstration) g is a flag for global search
console.log("otherName.match(/i/i): ", otherName.match(/i/i)); // Matching string object with a regular expression (not used here, just for demonstration) i is a flag for case-insensitive search
console.log("otherName.match(/i/m): ", otherName.match(/i/m)); // Matching string object with a regular expression (not used here, just for demonstration) m is a flag for multiline search

console.log("otherName.search(/i/): ", otherName.search(/i/)); // Searching for character 'i' in string object

console.log("otherName.localeCompare('Singla'): ", otherName.localeCompare('Singla')); // Comparing string object with another string

console.log("otherName.valueOf(): ", otherName.valueOf()); // Getting primitive value of string object

console.log("otherName.toString(): ", otherName.toString()); // Converting string object to string


const url = "https://singla.com/singla%20sahil";

url.replace("%20", "-"); // Replacing %20 with space in URL
console.log("Encoded URL: ", url.replace("%20", "-")); // Output: https://singla.com/singla-sahil
