import { fetchTransactions } from "./api.js";
import { state } from "./state.js";
import { renderTransactions } from "./ui.js";
import { setupEvents } from "./events.js";

async function init() {
    state.transactions = await fetchTransactions();
    renderTransactions(state.transactions);
    setupEvents();
}

init();
