console.log('Fetch - callback!');

const display = document.querySelector('#display');

function getQuote(uiDisplay){
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => uiDisplay(data.value))
}

function displayQuote(quoteText){
    display.textContent = quoteText;
}

getQuote(displayQuote);