function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }
    return x + y;
}

try {
    console.log(sum("1", "2"));
} catch (error) {
    console.log(`Error: ${error.message}`);
}

let user = {username: "sam", password: "123abc"};

function login(username, password) {
    if (username !== user.username || password !== user.password) {
        throw new Error('Invalid username or password');
    }
    console.log("login successful!");
}

try {
    login("sam", "123abc");
} catch (error) {
    console.log(`Error: ${error.message}`);
}

try {
    login("sam", "wrongpassword");
} catch (error) {
    console.log(`Error: ${error.message}`);
}