const collectAnimals = (...animals) => [...animals]

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "wolf", "bear", "monkey"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

const combineFruit = (fruit, sweets, vegetables) => {fruit, sweets, vegetables}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]),
   {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     })

function parseSentence({ location, duration }) {
    return `We're going to have a good time in ${location} for ${duration}`;
}
      

console.log(parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
}));

const returnFirst = ([firstItem]) => firstItem;

console.log(returnFirst(["apple", "banana", "cherry"]));

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = ([firstFav, secondFav, thirdFav]) => `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`;

console.log(returnFavorites(favoriteActivities));

const combineAnimals = (...animals) => [].concat(...animals)

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1);

console.log(product(2, 3, 4));

const unshift = (array, ...elements) => [...elements, ...array];

const originalArray = [1, 2, 3];
console.log(unshift(originalArray, 'a', 'b', 'c', 'd', 'e'));

const populatePeople = names => 
    names.map(name => {
        const [firstName, lastName] = name.split(" ");
        return { firstName, lastName };
});

const people = populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]);
console.log(people);