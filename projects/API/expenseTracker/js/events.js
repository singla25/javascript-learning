import { addTransaction } from "./api.js";
import { state } from "./state.js";
import { renderTransactions } from "./ui.js";

export function setupEvents() {
    const form = document.getElementById("form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const title = form.title.value;
        const amount = +form.amount.value;
        const type = form.type.value;
        const category = form.category.value;
        const date = form.date.value;

        const newItem = {
            id: Date.now(),
            title,
            amount,
            type,
            category,
            date
        };

        await addTransaction(newItem);
        state.transactions.push(newItem);
        renderTransactions(state.transactions);

        form.reset();
    });
}
