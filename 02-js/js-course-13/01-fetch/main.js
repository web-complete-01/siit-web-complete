console.log('Async JS');

document.querySelector('button').addEventListener('click', function(){
    alert('Hey')
})

const apiUrl = 'https://api.chucknorris.io/jokes/random';



// setInterval(function(){
//     console.log('async code!');
// }, 1)

console.log('Stack instruction 1');

fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })



// for (let i = 0; i < 20000; i++) {
//     console.log(i);
// }

console.log('Stack instruction 2');