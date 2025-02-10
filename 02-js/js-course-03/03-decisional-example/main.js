/**
 * The user provides a number. 
 * The program displays a message telling if the provided number positive, negative or neutral. 
 * O is considered positive
 */

console.log('example 03 main.js is loaded...');

let userNumber = prompt('Input a number:');
userNumber = Number(userNumber);

if (userNumber > 0) {
    alert('The number is positive');
}
else {
    if (userNumber < 0) {
        alert('The number is negative');
    }
    else {
        alert('The number is neutral');
    }
}
