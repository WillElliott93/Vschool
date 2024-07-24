function fizzBuzz() {
    let tally = {
        fizz: 0,
        buzz: 0,
        fizzbuzz: 0
    };

    for (let num = 1; num <= 100; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            console.log("FizzBuzz");
            tally.fizzbuzz++;
        } else if (num % 3 === 0) {
            console.log("Fizz");
            tally.fizz++;
        } else if (num % 5 === 0) {
            console.log("Buzz");
            tally.buzz++;
        } else {
            console.log(num);
        }
    }

    return tally;
}

let tally = fizzBuzz();
console.log(tally);