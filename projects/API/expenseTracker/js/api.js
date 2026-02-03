import { state } from "./state.js";

const STORAGE_KEY = "expense-tracker-data";

export async function fetchTransactions() {
    state.loading = true;

    return new Promise((resolve) => {
        setTimeout(() => {
            const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
            state.loading = false;
            resolve(data);
        }, 800);
    });
}

export async function addTransaction(transaction) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    data.push(transaction);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
