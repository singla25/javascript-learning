// filter

const coding = ['js', 'java', 'cpp', 'python', 'ruby']
const code = coding.forEach( (item) => {
    // console.log(item);
    return item;
})
console.log(code) // it returns nothing because forEach doesn't return anything
console.log()


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums)
console.log()


// ---------- filters ----------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const oddNumber = numbers.filter( (num) => (num % 2 != 0));
console.log(`Odd Number: `,oddNumber)
console.log()

const evenNumber = numbers.filter( (num) => num % 2 == 0)
console.log(`Even Number: `,evenNumber)
console.log()

const multipleOfThree = numbers.filter( (num) => {
    return num % 3 == 0;
});
console.log(`Multiple of Three: `, multipleOfThree);
console.log()


const books = [
  { title: "The Silent Patient", publicationYear: 2019, genre: "Fiction" },
  { title: "Atomic Habits", publicationYear: 2018, genre: "Self-Help" },
  { title: "Educated", publicationYear: 2018, genre: "Memoir" },
  { title: "The Midnight Library", publicationYear: 2020, genre: "Fiction" },
  { title: "Becoming", publicationYear: 2018, genre: "Biography" },
  { title: "The Subtle Art of Not Giving a F*ck", publicationYear: 2016, genre: "Self-Help" },
  { title: "It Ends with Us", publicationYear: 2016, genre: "Fiction" },
  { title: "The Alchemist", publicationYear: 1988, genre: "Fiction" },
  { title: "Can't Hurt Me", publicationYear: 2018, genre: "Self-Help" },
  { title: "Where the Crawdads Sing", publicationYear: 2018, genre: "Fiction" }
];

const userBooks = books.filter( (book) => {
  return book.publicationYear > 2015 && book.genre === "Fiction";
});

console.log("User Books:", userBooks);
console.log()

