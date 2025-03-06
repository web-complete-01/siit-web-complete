console.log('Greet the user!');
const nameTextBox = document.querySelector('#user-name');
const greetDisplay = document.querySelector('#greet-display');
const errorMsg = document.querySelector('#name-error');

const nameBtn = document.querySelector('#name-btn');

nameBtn.addEventListener('click', function(){  
    // clear the previous greet message
    greetDisplay.textContent = '';

    // show error
    if(nameTextBox.value.length == 0){
        errorMsg.style.display = `block`;
        return;
    }

    // hide the error message 
    errorMsg.style.display = `none`;

    // display the greet message
    greetDisplay.textContent = `Hello, ${nameTextBox.value}!`;

    // clear the textbox value
    nameTextBox.value = '';
});