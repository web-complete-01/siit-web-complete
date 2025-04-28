console.log('OOP encapsulation');


class Player {
    constructor(name, avatar){
        this.name = name;
        this.avatar = avatar;
        this.score = 0;
    }

    move(){
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        console.log(`${this.name} rolls ${diceRoll}`);
        this.score += diceRoll;
        console.log(`${this.avatar} ${this.name}'s current score is: ${this.score}`);
    }
}


class Game {
    constructor(rounds, players){
        this.rounds = rounds;
        this.players = players;
        this.currentRound = 0;
    }


    newRound(){
        console.log(``);
        console.log(` === 🎲 ROUND ${ ++this.currentRound } STARTS 🎲 === `);
        this.players.forEach(player => player.move());
    }

    
    play(){
        while(this.currentRound < this.rounds){
            this.newRound();
        }
    }
    
}


const players = [
    new Player('Andi', '🚗'),
    new Player('Alin', '⛸'),
    new Player('Anca', '⚽')
];

const game = new Game(5, players);
console.log(game);

game.play();
