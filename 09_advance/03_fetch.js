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


fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Hello",
        body: "This is post body",
        userId: 1
    })
})
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));


// fetch 404 / 500 pe reject nahi hota
// response.ok check karna padta hai
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    if (!response.ok) {
        throw new Error("HTTP Error");
    }
    return response.json();
})
.then(data => console.log(data))
.catch(err => console.log(err));


