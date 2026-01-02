// Date and Time in JavaScript
const now = new Date();
console.log("Current Date and Time:", now); // Default format is ISO 8601 - this format is not readable

console.log("Current Date and Time toString:", now.toString()); // this format is more readable
console.log("Current Date and Time toDateString:", now.toDateString()); // human-readable date
console.log("Current Date and Time toTimeString:", now.toTimeString()); // human-readable

console.log("Current Date and Time toISOString:", now.toISOString()); // ISO format is best for storage

console.log("Current Date and Time toJSON:", now.toJSON()); // JSON format

console.log("Current Date and Time toLocaleDateString:", now.toLocaleDateString()); // locale-specific
console.log("Current Date and Time toLocaleTimeString:", now.toLocaleTimeString()); // locale-specific
console.log("Current Date and Time toLocaleString:", now.toLocaleString()); // locale-specific

now.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
    // click ctrl+space to see more options
})

console.log("Current Date and Time toUTCString:", now.toUTCString()); // UTC format
console.log()

const specificDate = new Date('2025-07-11'); // ISO format is best
console.log("specificDate", specificDate);
console.log("specificDate toDateString()", specificDate.toDateString());
console.log("specificDate toLocaleString()", specificDate.toLocaleString());
console.log()

const anotherDate = new Date(2025, 6, 11); // month is 0-indexed! (6 means July)
console.log("anotherDate", anotherDate);
console.log("specificDate toDateString()", specificDate.toDateString());
console.log("TypeOf anotherDate:", typeof anotherDate);
console.log()

const newDate = new Date(2025, 6, 11, 15, 30, 0); // Year, Month (0-indexed), Day, Hours, Minutes, Seconds
console.log("newDate", newDate);
console.log("newDate toLocaleString()", newDate.toLocaleString());
console.log()

console.log("Year", now.getFullYear());
console.log("Month (0-indexed)", now.getMonth()); // 0 = January, 1 = February, ..., 11 = December
console.log("Date", now.getDate()); // Day of the month (1-31)
console.log("Day of the week (0 = Sunday)", now.getDay()); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
console.log("Hours", now.getHours()); // Hour (0-23)
console.log("Minutes", now.getMinutes());
console.log("Seconds", now.getSeconds()); // Seconds (0-59)
console.log()

let myTimeStamp = Date.now(); // Returns the number of milliseconds since January 1, 1970
let createdDate = new Date("07-13-2025"); // Date string format can vary by locale

console.log("Current Timestamp:", myTimeStamp);
console.log("Created Date from Timestamp:", createdDate.getTime()); // Get time in milliseconds
console.log()

console.log("Date.now() it gives time in millisecond", Date.now());
console.log("Date.now() it gives time in second", Date.now() / 1000); // Convert to seconds

console.log("Date.now() it gives time in minute", Date.now() / (1000 * 60)); // Convert to minutes
console.log("Date.now() it gives time in hour", Date.now() / (1000 * 60 * 60)); // Convert to hours
console.log("Date.now() it gives time in day", Date.now() / (1000 * 60 * 60 * 24)); // Convert to days

