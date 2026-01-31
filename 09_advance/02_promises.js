const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
}); 

promiseOne.then(()=>{
    console.log("Promise Consumed");
    console.log();
})
// .then() ka sidha connection hai resolve ke sath 

// resolve -> then
new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Asyn task 2");
        resolve()
    }, 2000)
}).then(()=>{
    console.log("Asyn 2 resolved");
    console.log();
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            username: "Singla",
            email : "singla@mailinator.com"
        });
    }, 3000)
})

promiseThree.then((user)=>{
    console.log(user);
})

// reject-> catch
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true;

        if (!error) {
            resolve("No error, data received");
        } else {
            reject("Something went wrong");
        }
    }, 4000)
});

promiseFour
.then((data) => {
    console.log(data);
    console.log();
})
.catch((error) => {
    console.log(error);
    console.log();
});

// This runs before every because it runs immediately
const promiseFive = new Promise((resolve, reject)=>{
    let error = true;

    if(!error){
        resolve({
        username: "Singla",
        email : "singla@mailinator.com"
    })
    } else {
        reject("Something went wrong 5");
    }
})

promiseFive
.then((user)=>{
    console.log(user);
})
.catch((error)=>{
    console.log(error);
})


const promiseSix = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;

        if(!error){
            resolve({
            username: "Singla",
            email : "singla@mailinator.com"
        })
        } else {
            reject("Something went wrong");
        }
    }, 5000)
})

promiseSix
.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The promise is either resolved or ef rejected")
})



