console.log('Async Await in JS');

// fetch('https://api.chucknorris.io/jokes/random')
//     .then(response => response.json())
//     .then(jsonData => console.log(jsonData.value))
//     .catch(errorMsg => console.error(errorMsg))

async function getJoke(){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    console.log(data);
}


getJoke();
