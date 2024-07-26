function addition() {
    const num1 = parseFloat(document.getElementById('add-num1').value);
    const num2 = parseFloat(document.getElementById('add-num2').value);
    const result = num1 + num2;
    document.getElementById('add-result').innerText = `Result: ${result}`;
}

function subtraction() {
    const num1 = parseFloat(document.getElementById('subtract-num1').value);
    const num2 = parseFloat(document.getElementById('subtract-num2').value);
    const result = num1 - num2;
    document.getElementById('subtract-result').innerText = `Result: ${result}`;
}

function multiplication() {
    const num1 = parseFloat(document.getElementById('multiply-num1').value);
    const num2 = parseFloat(document.getElementById('multiply-num2').value);
    const result = num1 * num2;
    document.getElementById('multiply-result').innerText = `Result: ${result}`;
}