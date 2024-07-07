const readline = require("readline-sync")
let firstNum = readline.question("Please enter your first number")

function addNum(num1, num2) {
    let result = num1 + num2
    return result
}
console.log(add(1, 2))

function subNum(num1, num2) {
    let result = num1 - num2
    return result
}

function multNum(num1, num2) {
    let result = num1 * num2
    return result
}

function divNum(num1, num2) {
    let result = num1 / num2
    return result
}