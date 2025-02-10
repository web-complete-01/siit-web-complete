console.log('main.js is loaded...');

let userName = prompt('Input your name: ');

alert(`Hello, ${userName}!`);

let choice = confirm('Do you like programming');

if(choice){              // similar to choice == true
    alert(`Yey! I'm glad for you`);
    alert(`Oookey dokey`);
}
else{
    alert(`Well... I'm sorry for you!`);
    alert(`Tough life`);
}

alert(`Let's do some programming!`);