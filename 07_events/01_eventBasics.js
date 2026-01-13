document.getElementById('lamp').onclick = function() {
    alert("You are intrested in Table Lamps images - external js onclick");
}
// This is not a good approach, here we also face so many problems which we currently maybe not see
// This doesn't give so much information, This give us less features  


// Best Approach 
document.getElementById('nature').addEventListener('click', function(){
    alert('You are intrested in Nature Images - By EventListner')
}, false)

// attachEvent
// jQuery

// Event Object (e)
document.getElementById('camel').addEventListener('click', function(e){
    console.log(e)
    console.log(e.timeStamp)
    const seconds = (e.timeStamp / 1000).toFixed(2);
    console.log(`Event triggered after ${seconds} seconds`);

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

}, false)


// Event Propogation - Bubbling 
// document.getElementById('images').addEventListener('click', function(e){
//     console.log("Clicked inside the ul");
// }, false)

// document.getElementById('car').addEventListener('click', function(e){
//     console.log("Car clicked");
// }, false)

// Capturing
// document.getElementById('images').addEventListener('click', function(e){
//     console.log("Clicked inside the ul");
// }, true)

// document.getElementById('nature').addEventListener('click', function(e){
//     console.log("Nature clicked");
// }, true)

// Stop Propogation
document.getElementById('images').addEventListener('click', function(e){
    console.log("Clicked inside the ul");
}, false)

document.getElementById('nature').addEventListener('click', function(e){
    console.log("Nature clicked");
    e.stopPropagation()
}, false)

// Prevent Default
document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault()
    e.stopPropagation() // now bubbling also stops
    console.log("Google Clicked");
}, false)

// Remove image on click
// document.querySelector("#images").addEventListener('click', (e)=>{
//     console.log(e.target.parentNode);
//     let removeIt = e.target.parentNode;

//     // removeIt.remove();   // method-1

//     removeIt.parentNode.removeChild(removeIt);   // method-2
// })

// here we face one problem that if we click on list point then it remove all ul because then parent is ul and all li items are child
// so we have to provide some strict rules here

document.querySelector("#images").addEventListener('click', (e)=>{
    console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if(e.target.tagName === "IMG") {
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        removeIt.remove(); 
    }
})
