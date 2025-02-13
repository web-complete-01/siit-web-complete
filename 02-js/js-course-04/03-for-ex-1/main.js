console.log('Alea iacta est..  But with a for loop.');

for (let i = 0; i < 5; i++) {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`Dice ${i + 1} roll: ${diceRoll}`);
}