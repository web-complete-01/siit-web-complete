export const App = document.createDocumentFragment();

const title = document.createElement('h1');
title.append('Rock Paper Scissors');
App.append(title);

const options = {
  rock: {
    icon: 'fa-hand-back-fist',
    beats: [
      {
        what: 'scissors',
        how: 'crushes',
      },
      { what: 'lizard', how: 'crushes' },
    ],
  },
  paper: {
    icon: 'fa-hand',
    beats: [
      {
        what: 'rock',
        how: 'covers',
      },
      {
        what: 'spock',
        how: 'disproves',
      },
    ],
  },
  scissors: {
    icon: 'fa-hand-scissors',
    beats: [
      {
        what: 'paper',
        how: 'cuts',
      },
      { what: 'lizard', how: 'decapitates' },
    ],
  },
  lizard: {
    icon: 'fa-hand-lizard',
    beats: [
      { what: 'spock', how: 'poisons' },
      { what: 'paper', how: 'eats' },
    ],
  },
  spock: {
    icon: 'fa-hand-spock',
    beats: [
      { what: 'rock', how: 'vaporizes' },
      { what: 'scissors', how: 'smashes' },
    ],
  },
};
type OptionsObject = typeof options;
type Options = keyof OptionsObject;

for (const option in options) {
  const key = option as Options;

  const button = document.createElement('button');
  const icon = document.createElement('i');
  icon.classList.add('fa-solid', options[key].icon);
  button.append(icon, ' ', capitalizeFirstLetter(key));
  button.addEventListener('click', () => playGame(key));
  App.append(button, ' ');
}

const resultBox = document.createElement('ul');
App.append(resultBox);

function capitalizeFirstLetter(str: string) {
  return str[0].toUpperCase() + str.substring(1);
}

function playGame(playerChoice: Options) {
  const optionNames = Object.keys(options) as Options[];
  const numOption = getRandomInteger(0, optionNames.length - 1);
  const computerChoice = optionNames[numOption]; 

  let resultText = '';
  let flavorText = '';

  const playerWinsBeat = findWinningBeat(playerChoice, computerChoice);

  if (playerWinsBeat) {
    resultText = 'Player Wins.';
    flavorText = getFlavorText(playerChoice, playerWinsBeat, computerChoice);
  } else if (playerChoice === computerChoice) {
    resultText = "It's a draw.";
  } else {    
    const computerWinsBeat = findWinningBeat(computerChoice, playerChoice)!;

    resultText = 'Computer Wins.';
    flavorText = getFlavorText(computerChoice, computerWinsBeat, playerChoice);
  }

  const resultItem = document.createElement('li');
  resultItem.append(resultText, ' ', flavorText);
  resultBox.append(resultItem);
}

function getRandomInteger(min = 0, max = 1) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function getFlavorText(winingChoice: string, beat: {what: string, how: string}, losingChoice: string) {
function getFlavorText(winingChoice: string, beat: OptionsObject[Options]['beats'][number], losingChoice: string) {
  return `${capitalizeFirstLetter(winingChoice)} ${
      beat.how
    } ${capitalizeFirstLetter(losingChoice)}.`
}

function findWinningBeat(firstChoice: Options, secondChoice: Options) {
  return options[firstChoice].beats.find(
      (beat) => beat.what === secondChoice
    );
}
