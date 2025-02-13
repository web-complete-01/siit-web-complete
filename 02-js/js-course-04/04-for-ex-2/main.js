console.log('Alea iacta est..  But what is the score?');

let score = 0;

for (let i = 0; i < 5; i++) {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`Dice ${i + 1} roll: ${diceRoll}`);

    score = score + diceRoll;
}

console.log(`Your score is: ${score}`);
