console.log('Fetch - promise!');


const display = document.querySelector('#display');

function getQuote(){
    const quotePromise = fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => data.value)

    return quotePromise;
}

function displayQuote(quoteText){
    display.textContent = quoteText;
}

getQuote()
    .then(quote => displayQuote(quote));