console.log('Promise 01');


function getDelayedNumber() {
    return new Promise((resolve, reject) => {
        console.log('Promise pending');
        
        setInterval(()=>{
            const randomNumber = Math.floor(Math.random() * 11)
            console.log('Promise fulfiled');
            resolve(randomNumber);
        }, 2000)
    })
}


getDelayedNumber()
    .then(data => console.log(data))
    .catch(errMsg => console.error(errMsg))