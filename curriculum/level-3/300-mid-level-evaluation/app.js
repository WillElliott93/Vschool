function solution(arr){
    const nonNegativeValues = arr.filter(value => value !== -1).sort((a, b) => a - b);
    
    return arr.map(value => value === -1 ? -1 : nonNegativeValues.shift());
}


console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(solution([5, 3, 1]))
console.log(solution([-1, -1, -1, -1]))
console.log(solution([100, -1, 50, -1, 75]))

function countVowels(str) {
    str = str.toLowerCase();
    
    const vowels = 'aeiou';
    
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

const input = 'aaa eee www xxx qqq iii ooo uuu';

console.log(countVowels(input)); // Output: 3

// Write a JavaScript function called **`findSumOfTwo`** that takes
//in an array of numbers and a target number. The function should find
//two numbers in the array that add up to the target number and return
//them as an array. If there are multiple pairs that satisfy the condition,
//return any one of them. If no such pair exists, return an empty array.

// Implement the **`findSumOfTwo`** function using either the provide
// example solutions or your own solution.

function findSumOfTwo(numbers, target) {
    let arr = []

    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
                arr.push(numbers[i], numbers[j])
            }
        }
    }
    return arr
}

console.log(findSumOfTwo([2, 4, 7, 11, 15], 91)); // Output: [2, 7]

console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5] 