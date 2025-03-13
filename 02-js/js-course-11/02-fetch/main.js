console.log('Using fetch');


// async function getData() {
//     const url = "https://api.chucknorris.io/jokes/random";

//     try {
//         // trigger the request
//         const response = await fetch(url);

//         // somethig goes wrong (the response id not OK) - go to catch section
//         if (!response.ok) {
//             throw new Error(`Response status: ${response.status}`);
//         }

//         // response will always come as a text / it must be parsed as a JSON - in this case
//         const json = await response.json();

//         // now we can access the data
//         console.log(json);
//     } 
//     // id an error occurs, this is the code to be executef
//     catch (error) {
//         console.error(error.message);
//     }
// }


const display = document.querySelector('#joke-display');
const getJokeButton = document.querySelector('#get-joke');

getJokeButton.addEventListener('click', function () {
    console.log('== THIS IS BEFORE THE REQUEST ==');

    // const url = "https://api.chucknorris.io/jokes/random";
    const url = "https://api.chucknorris.io/jokes/random?category=animal";
    fetch(url)
        .then(function (response) {
            // parse the received response as JSON
            console.log('📢Response received');
            console.log(response);

            return response.json();
        })
        .then(function (data) {
            // we can safely access the data (as JSON)
            console.log('✅The data is now in JSON format');

            console.log(data);
            console.log(data.value);

            display.textContent = data.value;
        })

    console.log('== THIS IS AFTER THE REQUEST ==');
});

