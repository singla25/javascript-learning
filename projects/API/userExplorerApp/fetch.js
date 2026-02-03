document.getElementById("fetchBtn").addEventListener("click", async () => {
    usersList.innerHTML = "";
    loader.style.display = "block";

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
            throw new Error("HTTP Error");
        }

        const data = await res.json();
        renderUsers(data);
    } catch (error) {
        usersList.innerHTML = "<li>Error loading users</li>";
    } finally {
        loader.style.display = "none";
    }
});

function renderUsers(users) {
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        usersList.appendChild(li);
    });
}
