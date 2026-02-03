import { state } from "./state.js";
import { renderTransactions } from "./ui.js";
import { saveTransactions, deleteTransaction } from "./api.js";

export function setupEvents() {
    const form = document.getElementById("form");
    const list = document.getElementById("transactions");
    const submitBtn = form.querySelector("button");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const transaction = {
            id: state.editingId ?? Date.now(),
            title: form.title.value,
            amount: +form.amount.value,
            type: form.type.value,
            category: form.category.value,
            date: form.date.value
        };

        if (state.editingId) {
            state.transactions = state.transactions.map(item =>
                item.id === state.editingId ? transaction : item
            );
        } else {
            state.transactions.push(transaction);
        }

        await saveTransactions(state.transactions);
        renderTransactions(state.transactions);

        state.editingId = null;
        submitBtn.textContent = "Add Transaction";
        form.reset();
    });

    list.addEventListener("click", async (e) => {

        if (e.target.classList.contains("delete")) {
            const id = Number(e.target.dataset.id);
            await deleteTransaction(id);
            state.transactions = state.transactions.filter(t => t.id !== id);
            renderTransactions(state.transactions);
        }

        if (e.target.classList.contains("edit")) {
            const id = Number(e.target.dataset.id);
            const item = state.transactions.find(t => t.id === id);

            form.title.value = item.title;
            form.amount.value = item.amount;
            form.type.value = item.type;
            form.category.value = item.category;
            form.date.value = item.date;

            state.editingId = id;
            submitBtn.textContent = "Update Transaction";
        }
    });
}
