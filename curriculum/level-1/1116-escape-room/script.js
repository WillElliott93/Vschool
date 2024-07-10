const readline = require("readline-sync");
const name = readline.question("What is your name? ");

console.log('Hi ' + name + '!');

console.log("You are currently trapped in a room. The door is locked, there is a hole in a wall, and you can search for a key. What do you do " + name + '?');

options = ['Search for key', 'Try to open the door', 'Put your hand in the hole'];

index = readline.keyInSelect(options);

if (index === 0) {
    console.log('You search for a key and eventually you find one!');
    console.log('Would you like to try the door, or stick your hand in the hole?');
    
    options2 = ['Try to open the door', 'Put your hand in the hole'];
    
    index2 = readline.keyInSelect(options2);
    if (index2 === 0) {
        console.log(name + ' has successfully escaped the room! You win!');
    } else if (index2 === 1) {
        console.log('You stick your hand in the hole and are sucked in. You have died :(');
    }
} else if (index === 1) {
    console.log('You try the door, but unfortunately it is locked.');
    console.log('Would you like to search for the key, or stick your hand in the hole?');
    
    options3 = ['Search for the key', 'Put your hand in the hole'];
    
    index3 = readline.keyInSelect(options3);
    
    if (index3 === 0) {
        console.log('You search for a key and eventually you find one!');
        console.log('Would you like to try the door the door again, or stick your hand in the hole?');
        options2 = ['Try to open the door', 'Put your hand in the hole'];
        index2 = readline.keyInSelect(options2);
        if (index2 === 0) {
            console.log(name + ' has successfully escaped the room! You win!');
        } else if (index2 === 1) {
            console.log('You stick your hand in the hole and are sucked in. You have died :(');
        }
    } else if (index3 === 1) {
        console.log('You stick your hand in the hole and are sucked in. You have died :(');
    }
} else if (index === 2) {
    console.log('You stick your hand in the hole and you are sucked in. You have died :(');
}
