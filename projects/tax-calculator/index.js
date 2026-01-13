const form = document.querySelector(".calculator");
const result = document.querySelector(".result");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const amount = parseFloat(document.querySelector("#principalAmount").value);
    const taxPercent = parseFloat(document.querySelector("#taxPercentage").value);
    const noteValue = document.querySelector("#noteValue").value;

    if (isNaN(taxPercent) || taxPercent < 0) {
        result.innerHTML = "❌ Please enter a valid tax percentage";
        return;
    }

    const taxAmount = (amount * taxPercent) / 100;
    const totalAmount = amount + taxAmount;

    const notesCount = Math.floor(totalAmount / noteValue);
    const remainingAmount = (totalAmount % noteValue).toFixed(2);

    // Display result
    result.innerHTML = `
        <p>💰 Amount: ₹${amount}</p>
        <p>📊 Tax (${taxPercent}%): ₹${taxAmount.toFixed(2)}</p>
        <p>🧾 Total Amount: ₹${totalAmount.toFixed(2)}</p>
        <p>💵 Notes of ₹${noteValue}: ${notesCount}</p>
        <p>💸 Remaining Amount: ₹${remainingAmount}</p>
    `;
});
