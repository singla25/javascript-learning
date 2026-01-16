const form = document.querySelector(".calculator");
const result = document.querySelector(".result");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const amount = parseFloat(document.querySelector("#principalAmount").value);
    const taxPercent = parseFloat(document.querySelector("#taxPercentage").value);
    const noteValue = parseInt(document.querySelector("#noteValue").value);

    // Validation
    if (isNaN(amount) || amount <= 0) {
        result.innerHTML = "❌ Please enter a valid amount";
        return;
    }

    if (isNaN(taxPercent) || taxPercent < 0) {
        result.innerHTML = "❌ Please enter a valid tax percentage";
        return;
    }

    // Per transaction calculation
    const taxPerTxn = (noteValue * taxPercent) / 100;
    const deductionPerTxn = noteValue + taxPerTxn;

    // Total transactions possible
    const transactions = Math.floor(amount / deductionPerTxn);

    // Final totals
    const totalWithdrawn = transactions * noteValue;
    const totalTaxPaid = transactions * taxPerTxn;
    const remainingAmount = amount - (totalWithdrawn + totalTaxPaid);

    // Display clean summary
    result.innerHTML = `
        <h3>Transaction Summary</h3>
        <p>💵 Note Value: ₹${noteValue}</p>
        <p>🔁 Total Transactions: ${transactions}</p>
        <p>🏧 Total Withdrawn: ₹${totalWithdrawn.toFixed(2)}</p>
        <p>📊 Total Tax Paid: ₹${totalTaxPaid.toFixed(2)}</p>
        <p>💰 Remaining Balance: ₹${remainingAmount.toFixed(2)}</p>
    `;
});
