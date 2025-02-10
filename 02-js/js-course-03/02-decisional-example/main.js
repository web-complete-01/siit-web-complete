/**
 * The user provides a number. 
 * The program displays a message telling if the provided number is positive or negative. 
 * O is considered positive
 */

console.log('example main.js is loaded...');

let userNumber = prompt('Input a number:');
userNumber = Number(userNumber);

if (userNumber >= 0) {
    alert('The number is positive');
} 
else {
    alert('The number is negative');
}