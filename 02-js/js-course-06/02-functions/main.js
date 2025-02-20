console.log('Talk about functions in JS!');
// debugger;

// function declaration
function readNumber(){
    let nr;
    let invalidNumber = true;
    while(invalidNumber){
        nr = prompt('Input a number');

        if(nr.length == 0 || isNaN(nr)){
            alert('Yout input in invalid! Try again.')
        }
        else{
            invalidNumber = false;
            nr = Number(nr);
        }
    }

    return nr;
}


let nr1 = readNumber();
let nr2 = readNumber();

console.log('main.js finished!');