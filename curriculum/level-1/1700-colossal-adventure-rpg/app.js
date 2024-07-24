const readline = require("readline-sync");

class Player {
    constructor(name, hitpoints, inventory, attack, ac) {
        this.name = name;
        this.hitpoints = hitpoints;
        this.inventory = inventory;
        this.attack = attack;
        this.ac = ac;
    }

    printInventory() {
        console.log(`Inventory: ${this.inventory.join(', ')}`);
    }

    isAlive() {
        return this.hitpoints > 0;
    }

    attackRoll() {
        return Math.floor(Math.random() * 20) + 1;
    }

    takeDamage(damage) {
        this.hitpoints -= damage;
    }
}

const playerName = readline.question("Welcome adventurer to the lands of Barovia! Tell me, what is your name? ");
const playerInventory = ["GreatSword", "Holy Symbol", "Health Potion", "Set of Armor"];
const paladin = new Player(playerName, 70, playerInventory, 12, 16);
const strahd = new Player("The Devil Strahd", 150, ["1,000,000 Gold", "Strahd's Sword"], 10, 18);
const werewolf = new Player("Werewolf", 45, ["Potion", "Cloak of Protection"], 5, 14);
const vampire = new Player("Vampire", 70, ["Potion", "Dark Blade"], 8, 16);
const zombie = new Player("Zombie", 35, ["Old Sword", "Plate Armor"], 2, 10);

let isGameRunning = true;

while (isGameRunning && paladin.isAlive()) {
    let action = readline.question(
        "Where would you like to go? Press [N] for North to Strahds castle, [S] for South to the graveyard, [E] for East to the old ruins, [W] for West to the woods, [I] to check your inventory, or [Q] for quit: ",
        { limit: ["n", "s", "e", "w", "i", "q"] }
    ).toLowerCase();

    if (action === "n") {
        console.log("You have chosen to go north to the devil Strahd's castle. Good luck, brave adventurer!");

        combat(paladin, strahd);

        if (strahd.isAlive() === false) {
            console.log(`Congratulations, ${playerName}! You have defeated Strahd and cleansed Barovia of his presence. You are victorious!`);
            isGameRunning = false;
        }
    } else if (action === "s" || action === "w" || action === "e") {
        let direction;
        if (action === 's') {
            direction = 'South towards the graveyard';
        } else if (action === 'w') {
            direction = 'West towards the woods';
        } else if (action === 'e') {
            direction = 'East towards the old ruins';
        }
        let randomEnemy = getRandomEnemy();

        console.log(`You have chosen to go ${direction}. You encounter ${randomEnemy.name}!`);

        let decision = readline.question(`Do you want to [F]ight or [R]un? `, { limit: ["f", "r"] }).toLowerCase();
        if (decision === "f") {
            combat(paladin, randomEnemy);
        } else if (decision === "r") {
            let runChance = (Math.floor(Math.random() * 20));
            if(runChance >= 10) {
                console.log(`You run away from ${randomEnemy.name}!`);
            } else if (runChance <= 10) {
                console.log(`You attempt to run away but ${randomEnemy.name} stops you!`);
                combat(paladin, randomEnemy);
            }   
        }
    } else if (action === "i") {
        paladin.printInventory();
    } else if (action === "q") {
        console.log(`Thanks for playing, ${playerName}!`);
        isGameRunning = false;
    }
}

function combat(player, enemy) {
    while (player.isAlive() && enemy.isAlive()) {
        console.log(`Your turn to attack ${enemy.name}!`);
        let playerAttackRoll = player.attackRoll();
        if (playerAttackRoll === 20) {
            let damage = (Math.floor(Math.random() * 12) + player.attack) * 2;
            enemy.takeDamage(damage);
            console.log(`Critical hit! You hit ${enemy.name} for ${damage} damage!`);
        } else if (playerAttackRoll >= enemy.ac) {
            let damage = Math.floor(Math.random() * 12) + player.attack;
            enemy.takeDamage(damage);
            console.log(`You hit ${enemy.name} for ${damage} damage!`);
        } else {
            console.log(`You missed ${enemy.name}!`);
        }

        if (enemy.isAlive() === false) {
            console.log(`${enemy.name} has been defeated! You gain 20 hitpoints and loot ${enemy.name}'s inventory.`);
            player.hitpoints += 20;
            player.inventory.push(...enemy.inventory);
            return;
        }

        console.log(`${enemy.name}'s turn to attack!`);
        let enemyAttackRoll = enemy.attackRoll();
        if(enemyAttackRoll === 20) {
            let damage = (Math.floor(Math.random() * 8) + enemy.attack) * 2;
            player.takeDamage(damage)
            console.log(`Critical hit! The ${enemy.name} hit you for ${damage} damage!`)
        } else if (enemyAttackRoll >= player.ac) {
            let damage = Math.floor(Math.random() * 8);
            player.takeDamage(damage);
            console.log(`${enemy.name} hits you for ${damage} damage!`);
        } else {
            console.log(`${enemy.name} missed you!`);
        }

        if (player.isAlive() === false) {
            console.log(`You have been defeated by ${enemy.name}. Game over!`);
            isGameRunning = false;
            return;
        }
    }
}

function getRandomEnemy() {
    let randomIndex = Math.floor(Math.random() * 3);
    if (randomIndex === 0) {
        return zombie;
    } else if(randomIndex === 1) {
        return vampire;
    } else if(randomIndex === 2) {
        return werewolf;
    }
}