class Player {
    constructor(name) {
        this.name = name;
        this.totalCoins = 0;
        this.status = 'Small';
        this.hasStar = false;
    }

    setName(namePicked) {
        this.name = namePicked;
    }

    gotHit() {
        const statuses = ['Powered Up', 'Big', 'Small', 'Dead'];
        const currentIndex = statuses.indexOf(this.status);
        if (currentIndex < statuses.length - 1) {
            this.status = statuses[currentIndex + 1];
        }
        if (this.status === 'Dead') {
            this.hasStar = false;
        }
    }

    gotPowerup() {
        const statuses = ['Small', 'Big', 'Powered Up'];
        const currentIndex = statuses.indexOf(this.status);
        if (currentIndex < statuses.length - 1) {
            this.status = statuses[currentIndex + 1];
        }
        if (this.status === 'Powered Up') {
            this.hasStar = true;
        }
    }

    addCoin() {
        this.totalCoins += 1;
    }

    print() {
        console.log(`Name: ${this.name}`);
        console.log(`Total Coins: ${this.totalCoins}`);
        console.log(`Status: ${this.status}`);
        console.log(`Star Active: ${this.hasStar}`);
    }
}

const getRandomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const player = new Player('Mario');

const intervalId = setInterval(() => {
    if (player.status === 'Dead') {
        clearInterval(intervalId);
    } else {
        const action = getRandomRange(0, 2);
        if (action === 0) {
            player.gotHit();
        } else if (action === 1) {
            player.gotPowerup();
        } else if (action === 2) {
            player.addCoin();
        }
        player.print();
    }
}, 1000);