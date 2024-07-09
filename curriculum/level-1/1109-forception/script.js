let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
let alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(people, alphabet) {
    let newArray = [];
    let newAlphabet = alphabet.split("");

    for (let i = 0; i < people.length; i++) {
        newArray.push(`${people[i]}:`);
        for (let j = 0; j < newAlphabet.length; j++) {
            let newValue = newAlphabet[j].toUpperCase();
            newArray.push(newValue);
        }
    } 
    console.log(newArray);
}


forception(people, alphabet);