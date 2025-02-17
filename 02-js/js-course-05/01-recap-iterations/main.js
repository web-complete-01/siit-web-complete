console.log('Sum the numbers!');

let userInput;
// let outputMsg = '';
let sum = 0;

do {
    userInput = prompt(`Input a number to add to the sum (current value: ${sum}).\nPress cancel to display the result`);
    console.log(`New user input: ${userInput}`);

    if(userInput !== null){
        // outputMsg += outputMsg ? ` + ${userInput}` : userInput;
        sum += Number(userInput);           // sum = sum + Number(userInput)
        console.log(`New sum: ${sum}`);
    }
    
} while(userInput !== null)

alert(`Sum is: ${sum}`);
// alert(`${outputMsg}${outputMsg ? ' = ' : ''}${sum}`);