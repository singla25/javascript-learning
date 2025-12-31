function calculate(operation) {

    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;
    const resultDiv = document.getElementById('result');

    let result;

    const operations = {
        "+": num1 + num2,
        "-": num1 - num2,
        "*": num1 * num2,
        "/": num2 !== 0 ? num1 / num2 : "num2 must not be zero"
    };

    result = operations[operation];

    resultDiv.style.display = "block";
    resultDiv.innerText = "Result : " + result;
}
