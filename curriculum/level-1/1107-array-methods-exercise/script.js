let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
fruit.shift()
let orangeFruit = fruit.indexOf('orange')
fruit.push(orangeFruit)
let veggieLength = vegetables.length
vegetables.push(veggieLength)
let food = fruit.concat(vegetables)
food.splice(4, 2)
food.reverse()
let foodString = food.toString()
console.log(foodString)
console.log(food)
console.log(veggieLength)
console.log(orangeFruit)
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);