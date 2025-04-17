console.log('Promise 01');

const diceNumber = 6;

const diceDisplay = document.querySelector(`#dice-display`);
for (let i = 1; i <= diceNumber; i++) {
    // create the dice
    const diceElem = document.createElement(`div`);
    diceElem.classList.add(`dice`);
    diceElem.id = `dice-${i}`;
    
    // instert in the DOM
    diceDisplay.append(diceElem);
}

function getRandomNumber(diceIndex) {
    return new Promise((resolve, reject) => {
        console.log(`Promise pending for dice ${diceIndex}`);

        const apiUrl = `https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new`;
        fetch(apiUrl)
            .then(response => response.text())
            .then(randomNr => {
                if(randomNr >= 1 && randomNr <=6){
                    console.log(`Promise fulfilled for dice ${diceIndex}`);
                    resolve({ diceIndex, randomNr})
                }
                else{
                    console.log(`Promise rejected for dice ${diceIndex}`);
                    reject(`Invalid number provided: ${randomNr}`)
                }
            })
    })
}

for (let i = 1; i <= diceNumber; i++) {
    getRandomNumber(i)
        .then(result => displayNumber(result))
        .catch(errMsg => displayError(errMsg))
}


function displayNumber(result) {
    console.log(result);
    document.querySelector(`#dice-${result.diceIndex}`).textContent = result.randomNr;
    document.querySelector('#error').style.display = 'none';
}

function displayError(error){
    document.querySelector('#error').style.display = 'block';
    document.querySelector('#error').textContent = error;
}

