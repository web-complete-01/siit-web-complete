function randomColor() {
    const hexSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    
    let  color = '#';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexSymbols.length);
        // console.log(hexSymbols[randomIndex]);
        color = color + hexSymbols[randomIndex];    //color += hexSymbols[randomIndex]\
    }
    
    return color;
}


function diceRoll(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}