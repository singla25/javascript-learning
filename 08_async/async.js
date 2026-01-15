console.log("Start");

setTimeout(() => {
  console.log("API Data after 2 sec");
}, 2000);

console.log("End");

function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 4000);
}

fetchData((data) => {
  console.log();
  console.log(`Nested Function Data: ${data}`);
});
