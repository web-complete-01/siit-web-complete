console.log('OOP encapsulation');


class Player {
    // this is a private property
    // can only be accesed from inside the object
    #score;

    constructor(name, avatar){
        this.name = name;
        this.avatar = avatar;
        this.#score = 0;
    }

    
    move(){
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        console.log(`${this.name} rolls ${diceRoll}`);
        this.#score += diceRoll;
        console.log(`${this.avatar} ${this.name}'s current score is: ${this.#score}`);
    }


    getScore(){
        return this.#score;
    }


    setScore(score){
        // a bunch of validations here
        this.#score = score;
    }
}


const player = new Player('Andi', '🚗');
player.move();

// a private property can be exposed by a public method
console.log(`${player.name}'s score is ${player.getScore()}`);
