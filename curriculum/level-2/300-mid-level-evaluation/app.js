function sortNumbers(numbers) {
    const newNumbers3 = numbers.sort(function(a, b) {
        return a - b
    })
    return numbers
}

const numbers = [4, 2, 7, 1, 9, 5];
const sortedNumbers = sortNumbers(numbers);
console.log(sortedNumbers);  // Output: [1, 2, 4, 5, 7, 9]

function convertToUppercase(strings) {
    return strings.map(toUp => toUp[0].toUpperCase() + toUp.slice(1))
}

const strings = ['hello', 'world', 'javascript'];
const uppercaseStrings = convertToUppercase(strings);
console.log(uppercaseStrings);  // Output: ['HELLO', 'WORLD', 'JAVASCRIPT']

function filterEven(arr) {
    const arrFilt = arr.filter(newNum => newNum % 2 === 0)
    return arr
}

const numbers2 = [1, 2, 3, 4, 5, 6]

console.log(filterEven(numbers2))