const cart = [
  { name: "Book", category: "Education", price: 200, qty: 2, inStock: true },
  { name: "Pen", category: "Education", price: 20, qty: 5, inStock: true },
  { name: "Laptop", category: "Electronics", price: 50000, qty: 1, inStock: false },
  { name: "Headphones", category: "Electronics", price: 1500, qty: 1, inStock: true },
  { name: "Notebook", category: "Education", price: 100, qty: 3, inStock: true }
];

for (let item of cart) {
    console.log(`${item.name} | ₹${item.price} | Qty: ${item.qty} | Category: ${item.category} | In-Stock: ${item.inStock}`);
}
console.log();

const inStock = cart.filter((item) => item.inStock);
console.log("Availbale Products: ");
console.log(inStock);
console.log()

const educationCategory = cart.filter((item) => item.category === "Education");
console.log("Educational Items: ");
console.log(educationCategory);
console.log()

const itemTotals = cart.map(item => {
  return {
    name: item.name,
    totalPrice: item.price * item.qty
  };
});
console.log("Total Price: ");
console.log(itemTotals);
console.log()

const grandTotalPrice = cart.reduce((total, item) => total + (item.qty * item.price), 0);
console.log("Grand Total Price: ");
console.log(grandTotalPrice);
console.log()
