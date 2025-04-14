console.log('Delayed random number...');


function delayedRandomNumber(){
    // 
    return new Promise((resolve, reject) => {
        // promise executor
        console.log('A random number will be provided soon...');
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 100) + 1;
            resolve(randomNumber);
            // reject('Service unavailable')
        }, 3000)
    });
}


delayedRandomNumber()
    .then(number => console.log(number))
    .catch(errorMsg => console.error(errorMsg))