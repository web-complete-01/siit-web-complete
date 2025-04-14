console.log('Creating promises');

const myPromise = new Promise((resolve, reject) =>{
    console.log(`Creating the promise, state is pending`);
    
    setTimeout(() => {    
        const isFulfilled = Math.random() > 0.5;

        if(isFulfilled){
            console.log(`Promise was fulfilled, executing resolve`);
            resolve('Promise fulfilled 😃')
        }
        else{
            console.log(`Promise was rejected, executing reject`);
            reject('Promise rejected 😞')
        }
    }, 2000)
});

myPromise
    .then(result => console.log(`Success: ${result}`))
    .catch(errorMsg => console.error(`Fail: ${errorMsg}`))