console.log('Promises recap...');

const apiUrl = `https://www.random.org/integers/?num=1&min=1&max=2&col=1&base=10&format=plain&rnd=new`;
const generatedNumbers = 3;

const numbersContainer = document.querySelector('#display-numbers-container');
const errorDisplay = document.querySelector('#error');


function getRandomNumber() {
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if(data > 0 && data < 7){
                    resolve(data)
                }
                else{
                    reject(`Invalid value provided: ${data}`);
                }
            })
    });
}

function createNumberDisplay(index){
    const displayNumber = document.createElement('div');
    displayNumber.classList.add(`display-number`, `empty`);
    displayNumber.id = `display-number-${index}`;
    displayNumber.textContent = `?`;
    numbersContainer.append(displayNumber);
}

    
function displayRandomNumber(number, index){
    const displayElem = document.querySelector(`#display-number-${index}`);
    displayElem.textContent = number;
    displayElem.classList.add(`filled`);
    displayElem.classList.remove(`empty`);
}


function displayError(errorMsg){
    errorDisplay.textContent = errorMsg;
}


function checkIdenticalArrayElements(array){
    for (let i = 0; i < array.length - 1; i++) {
        if(array[i] !== array[i + 1]){
            return false;
        }
    }

    return true;
}


// ===  main program === 

const promisesArray = [];

for (let i = 1; i  <= generatedNumbers; i++) {
    createNumberDisplay(i)

    const newPromise = getRandomNumber();

    newPromise
        .then(randomNr => displayRandomNumber(randomNr, i))
        .catch(error => displayError(error));

    promisesArray.push(newPromise);
}

// creates a promise that is:
//      fulfilled - when all promises are fulfilled 
//      - OR -
//      rejected - when first of them is rejected
Promise.all(promisesArray)
    .then(values => {
        console.log(values);
        console.log(checkIdenticalArrayElements(values));
    })
    .catch(error => console.error(error));

console.log(promisesArray);