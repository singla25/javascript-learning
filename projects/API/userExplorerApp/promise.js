document.getElementById("promiseBtn").addEventListener("click", () => {
    usersList.innerHTML = "";
    loader.style.display = "block";

    getUsersWithPromise()
        .then(renderUsers)
        .catch(() => {
            usersList.innerHTML = "<li>Error loading users</li>";
        })
        .finally(() => {
            loader.style.display = "none";
        });
});

function getUsersWithPromise() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

        xhr.onload = () => {
            xhr.status === 200
                ? resolve(JSON.parse(xhr.responseText))
                : reject("Error");
        };

        xhr.send();
    });
}

function renderUsers(users) {
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        usersList.appendChild(li);
    });
}


