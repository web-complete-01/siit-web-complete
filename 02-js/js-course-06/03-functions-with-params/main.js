console.log('functions with params');

// function declaration
function readNumber(promptMessage){
    let nr = prompt(promptMessage);
    nr = Number(nr);

    return nr;
}
    
let nr1 = readNumber('Input the first number: ')
let nr2 = readNumber('Input the second number: ')