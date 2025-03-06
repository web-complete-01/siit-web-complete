console.log('creating DOM elements');

const display = document.querySelector('#display');
const btn = document.querySelector('#btn-1');

let newDiv;

const outputMsg = [
    'I have no idea what am I doing',
    'Why did I chose to do this',
    'I need my pills',
    'I might be onto something...',
    'I am a God',
];

let index = 0;

btn.addEventListener('click', function(){
    // display.textContent = 'I love DOM!';
    // display.innerHTML = '<div>' + 'I love DOM!' + '</div>';

    // display.innerHTML = '<div>';
    // display.innerHTML += 'I love DOM!';
    // display.innerHTML += '</div>';

    //
    // display.innerHTML = '';


    // WE CAN ADD DOM ELEMENTS 
    if(newDiv === undefined){
        newDiv = document.createElement('div');
        display.append(newDiv);
    }

    // display the message and increment the index
    newDiv.innerText = `${index + 1}. ${outputMsg[index]}`;
    index = (index + 1) % outputMsg.length;
})

