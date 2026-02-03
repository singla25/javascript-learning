export function renderTransactions(list) {
    const container = document.getElementById("transactions");
    container.innerHTML = "";

    if (list.length === 0) {
        container.innerHTML = "<p>No transactions yet</p>";
        return;
    }

    list.forEach(item => {
        const div = document.createElement("div");
        div.className = `card ${item.type}`;

        div.innerHTML = `
            <div class="card-top">
                <strong>${item.title}</strong>
                <span>₹${item.amount}</span>
            </div>
            <small>${item.category || "General"} • ${item.date}</small>
            <div class="actions">
                <button class="edit" data-id="${item.id}">Edit</button>
                <button class="delete" data-id="${item.id}">Delete</button>
            </div>
        `;

        container.appendChild(div);
    });
}
