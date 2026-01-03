// For Each

const coding = ['js', 'java', 'cpp', 'python', 'ruby']
coding.forEach( function (item) {
    console.log(`Passing direct item through function : ${item}`)
} )
console.log()

coding.forEach((value) => {
    console.log(`Passing direct item through arrow function : ${value}`);  
})
console.log() 


function printMe(item) {
    console.log(`Passing to function : ${item}`);
}
coding.forEach(printMe)
console.log()


coding.forEach( (item, index, arr) => {
    console.log(`index => ${index}, arr => ${arr}, item => ${item} `)
})
console.log()


coding.forEach( (i, j, k) => {
    console.log(`index => ${j}, arr => ${k}, item => ${i}`)
})
console.log()


const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileName : 'js'
    },
    {
        languageName: 'Python',
        languageFileName : 'py'
    },
    {
        languageName: 'Java',
        languageFileName : 'java'
    },
    {
        languageName: 'C++',
        languageFileName : 'cpp'
    }
]

myCoding.forEach( (item) => {
    console.log(`Language Name : ${item.languageName} and Language file name : ${item.languageFileName}`)
    // console.log(item.languageName, item.languageFileName)
})
console.log()


const numbers = [1, 2, 3];
numbers.forEach((num, index, arr) => {
  arr[index] = num * 2;
});
console.log(numbers); // [2, 4, 6]

