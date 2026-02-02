// Fetch with try and catch
async function getAllUser(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json()
        console.log("Fetch with try and catch")
        console.log(data);
        console.log()
    } catch {
        console.log("Error: ", error);
    }
}
getAllUser()


// Fetch with then and catch
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((userData)=>{
    console.log("Fetch with Then and Catch")
    console.log(userData)
})
.catch((error)=> console.log(error))



