console.log('Static methods and properties in JS');
/*
class Dice{
    constructor(sides = 6){
       this.sides = sides;
    }

    roll(){
        return Math.floor(Math.random() * this.sides) + 1;
    }
}


const d1 = new Dice();
console.log(d1.roll());
*/


class Dice{
    static sides = 6;

    static roll(){
        return Math.floor(Math.random() * Dice.sides) + 1;
    }
}