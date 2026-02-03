const xhrBtn = document.getElementById("xhrBtn");
const loader = document.getElementById("loader");
const usersList = document.getElementById("users");

xhrBtn.addEventListener("click", () => {
    usersList.innerHTML = "";
    loader.style.display = "block";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.onload = function () {
        loader.style.display = "none";

        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            renderUsers(data);
        } else {
            usersList.innerHTML = "<li>Error loading users</li>";
        }
    };

    xhr.send();
});

function renderUsers(users) {
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        usersList.appendChild(li);
    });
}
