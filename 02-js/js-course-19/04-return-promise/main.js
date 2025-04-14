console.log('Returning promises!');


function doTranzaction(tranzactionValue){
    // some asyc code here
    return new Promise((resolve, reject) =>{
            console.log(`Tranzaction of ${tranzactionValue} pending...`);
    
            setTimeout(() => {    
                const accountValue = 500 + Math.floor(Math.random() * 10);
                if(accountValue >= tranzactionValue){
                    // Promise was fulfilled, executing resolve
                    resolve({
                        message: 'Tranzaction successfull 😃',
                        availableCredit: accountValue,
                        remainingCredit: accountValue - tranzactionValue
                    });
                }
                else{
                    // Promise was rejected, executing reject
                    reject({
                        message: 'Insufficient credit 😞',
                        availableCredit: accountValue
                    })
                }
            }, 2000)
    })
}

doTranzaction(505)
    .then(success => console.log(success))
    .catch(error => console.error(error))