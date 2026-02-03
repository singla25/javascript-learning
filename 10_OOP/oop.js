// Object Literal
const user = {
    userName : 'Sahil',
    email : 'singla@mailinator.com',
    logInCount : 10,
    signedIn : true,

    getUserDetails : function() {
        const name = this.userName;

        console.log('This (this) scope: ', this);
        console.log();
        console.log(`Got User Detail and user name is ${name}`);
    }
}

console.log('User Name : ', user.userName);
console.log();

console.log('getUserDetails function');
console.log(user.getUserDetails())
console.log();

console.log(this);
console.log(); console.log();

// Constructor
// const promise = new Promise();
// this new keboard is the constructor function


function User(username, email, isLoggedIn) {
    this.username = username,
    this.email = email,
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this;
    // if return this nahi use karenge, tab bhi output milega
    // BUT sirf tab jab function new ke saath call ho. 
    // UserOne and UserTwo Undefined rahe ge isse
}

const userOne = User('sahil', 'sahil@mailinator.com', 10);
const userTwo = User('rajiv', 'rajiv@mailinator.com', 11);
console.log(userOne)
console.log()

const userThree = new User('uday', 'uday@mailinator.com', 12);
const userFour = new User('maanik', 'maanik@mailinator.com', 13);
console.log(userOne)
console.log(userTwo)
console.log()

console.log(userThree.greeting()) // constructor
console.log(userFour)
console.log()

console.log(userThree.constructor);
console.log(userFour.constructor);