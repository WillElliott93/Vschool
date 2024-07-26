function addTotal() {
    const num1 = parseFloat(document.getElementById('goombaCaught').value * 5)
    const num2 = parseFloat(document.getElementById('bobsCaught').value * 7)
    const num3 = parseFloat(document.getElementById('cheepsCaught').value * 11)
    const result = num1 + num2 + num3
    document.getElementById('coinTotal').innerText = `${result} Total Coins Earned!`
}