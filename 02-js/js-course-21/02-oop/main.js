console.log('OOP in JS!');

const char1 = {
    name: 'Aliodor',
    nationality: 'Romanian'
}


const char2 = {
    name: 'Fat-Frumos',
    nationality: 'Romanian'
}

const char3 = {
    name: 'Batman',
    nationality: 'American',
    car: 'Batmobile'
}

const fruit = {
    name: "Apple",
    color: "Red"
}



class Hero {
    constructor(heroName, heroNationality){
        console.log('The Hero class contructor was called!');
        console.log(heroName);
        this.name = heroName;
        this.nationality = heroNationality;

        console.log(this);
    }

    greet(greetForm){
        console.log(`${greetForm}! Ma numesc ${this.name}.`);
    }
}
/*
// create a new object of class Hero
const h1 = new Hero('Aliodor', 'Romanian');
console.log(h1);
h1.greet(`Buna ziua`);


// create a new object of class Hero
const h2 = new Hero('Fat-Frumos', 'Romanian');
console.log(h2);
h2.greet(`Salutare`);
*/


class Player {
    constructor(playerName){
        this.name = playerName;
        this.score = 0;
    }

    rollDice(){
        const diceRoll = Math.floor(Math.random() * 6) +  1;
        console.log(`${this.name} rolls: ${diceRoll}`);

        this.score = this.score + diceRoll;
        console.log(`${this.name} current score: ${this.score}`);
    }
}

const p1 = new Player('Martinel');
const p2 = new Player('Aurica');


for (let i = 1; i < 6; i++) {
    console.log('');
    console.log(`=== ROUND ${i} starts ===`);

    p1.rollDice();
    p2.rollDice();
}
