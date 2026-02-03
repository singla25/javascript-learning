const STORAGE_KEY = "expense-tracker-data";

export async function fetchTransactions() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
            resolve(data);
        }, 500);
    });
}

export async function saveTransactions(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export async function deleteTransaction(id) {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const updated = data.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
