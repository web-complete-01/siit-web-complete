// this message is just for testing that the js file is loaded
// this instruction does not affect the logic of the program
console.log('main.js is loaded');

alert('Provide a number and I will display the following number!');

// get the input data - the use number
let userNumber = prompt('Input your number');
userNumber = Number(userNumber);

alert('The next number is: ' + (userNumber + 1));

// alert(Number(prompt("input your number")) + 1);
// alert(+prompt("input your number")) + 1;