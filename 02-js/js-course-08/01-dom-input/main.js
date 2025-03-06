console.log('DOM loaded...');

let textBox = document.querySelector('#user-name');
let formBtn = document.querySelector('button');


formBtn.addEventListener('click', commonEventHandler);
textBox.addEventListener('change', commonEventHandler)

function commonEventHandler(){
    console.log('here');
    console.log(textBox.value);
    console.log('and here');
}



formBtn.addEventListener('mouseover', function(){ 
    console.log('the mouse is over!');
    console.log(textBox.value);
    console.log('out');
})


// textBox.addEventListener('click', function(){
//     textBox.value = '';
// })

