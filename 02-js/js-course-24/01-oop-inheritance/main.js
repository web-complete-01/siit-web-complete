console.log('Inheritance in OOP');


class BasicPlayer {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.diceSides = 6;
    }

    move() {
        const diceRoll = this.diceRoll();
        console.log(`${this.name} rolls: ${diceRoll}`);

        this.score += diceRoll;
        console.log(`${this.name} score: ${this.score}`);
    }

    diceRoll() {
        return Math.floor(Math.random() * this.diceSides) + 1;
    }
}


class LuckyPlayer extends BasicPlayer {
    constructor(name, luckyNumber) {
        // calls the constructor of the parent class 
        super(name);
        this.luckyNumber = luckyNumber;
    }

    move() {
        const diceRoll = this.diceRoll();
        console.log(`${this.name} rolls: ${diceRoll}`);
        this.score += diceRoll;

        if (diceRoll === this.luckyNumber) {
            console.log(`${this.name} rolls his lucky number and rolls again! `);
            super.move();
        }
        else {
            console.log(`${this.name} score: ${this.score}`);
        }
    }
}


const p1 = new BasicPlayer('Vanilla');
console.log(p1);


const p2 = new LuckyPlayer('Lucky', 3);
console.log(p2);