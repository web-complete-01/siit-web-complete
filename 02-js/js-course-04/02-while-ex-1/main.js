console.log('Alea iacta est..');

let i = 0;
while (i < 5) {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`Dice ${i + 1} roll: ${diceRoll}`);
    
    i++;
}