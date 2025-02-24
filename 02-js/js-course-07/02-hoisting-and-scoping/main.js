// functions and variables hoisting in JS
// variable scoping

// debugger;

// a global variable
let g = 100;

// another global variable
let a = 777;


function demoFnc(){
    // a local variable
    let l = 111;

    // another local variable
    let a = 222;

    // this os stupid; don't do it -  it creates a global variable
    s = 999;

    console.log('Demo function running');
    console.log(`g is: ${g}`);
    console.log(`l is: ${l}`);
    console.log(`a is: ${a}`);
}

// demoFnc();



const weirdFnc = function(){
    console.log('a weird function - anonymous!');
}


/**
 *  MORE ABOUT JS FUNCTIONS
 */

function outer(inner){
    console.log(inner);
    inner();
}

outer(function(){console.log('this is a param function!')})