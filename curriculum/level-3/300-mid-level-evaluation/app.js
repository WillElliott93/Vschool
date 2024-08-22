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

const input = 'aaa iii ooo uuu';

console.log(countVowels(input)); // Output: 3

