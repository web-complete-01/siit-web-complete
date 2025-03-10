console.log('Scoreboard!');

const playerInput = document.querySelector('#new-player'); 
const scoreBoard = document.querySelector('.scoreboard');

const addPlayerBtn = document.querySelector('#add-player-btn'); 
addPlayerBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const playerName = playerInput.value;
    if(!playerName){
        alert('Specifiy a player name!');
        return;
    }

    scoreBoxFactory(scoreBoard, playerName);

    playerInput.value = '';
});


function scoreBoxFactory(parentElem, playerName){
    // create the score box (container)
    const scoreBox = document.createElement('div');
    scoreBox.classList.add('score-box');
    parentElem.append(scoreBox);

    // avatar
    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = `https://api.dicebear.com/9.x/bottts/svg?seed=${encodeURIComponent(playerName)}`;
    scoreBox.append(avatar);

    // the heading elem
    const heading = document.createElement('h3');
    heading.textContent = playerName;
    scoreBox.append(heading);

    // score div
    const playerScore = document.createElement('div');
    playerScore.classList.add('player-score');
    scoreBox.append(playerScore);

    // score display span
    const scoreDisplay = document.createElement('span');
    scoreDisplay.classList.add('score-display');
    scoreDisplay.innerText = '0';
    playerScore.append(scoreDisplay);

    // score text 
    const scoreText = document.createTextNode(' points');
    playerScore.append(scoreText);

    // +1 point button
    const incrementBtn = document.createElement('button');
    incrementBtn.innerText = '+1';
    scoreBox.append(incrementBtn);

    // score change logic
    let score = 0;
    incrementBtn.addEventListener('click', function (){
        scoreDisplay.textContent = ++score;
    });
}