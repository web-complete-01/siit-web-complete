console.log('main.js is loaded...');

let userName = prompt('Input your name: ');

alert(`Hello, ${userName}!`);

let choice = confirm('Do you like programming');

if(choice){              // similar to choice == true
    alert(`Hey! I also love programming!`);
}

alert(`Let's do some programming!`);