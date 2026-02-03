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
            <strong>${item.title}</strong>
            <span>₹${item.amount}</span>
            <small>${item.category} • ${item.date}</small>
        `;
        container.appendChild(div);
    });
}
