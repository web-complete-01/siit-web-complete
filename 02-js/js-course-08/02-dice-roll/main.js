console.log('Dice roll, but better!');

const displayElem = document.querySelector('#dice-display');

const rollBtn = document.querySelector('#dice-roll-btn');
rollBtn.addEventListener('click', function(){
    displayElem.textContent = Math.floor(Math.random() *  6)  + 1;
});