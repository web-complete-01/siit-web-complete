console.log('Dice roll using The DOM!');

const randomNumber = Math.floor(Math.random() * 6) + 1;

const display = document.querySelector('#display');
display.textContent = randomNumber;


const img = document.querySelector('img.coin');

const coinValue = Math.random() > 0.5 ? 'head.jpeg' : 'tails.jpeg';
img.src = `img/${coinValue}`;

// const coinValue = Number(Math.random() > 0.5) + 1;
// img.src = `img/side-${coinValue}.jpeg`;