console.log('Data attribute example');

const scoreBtns = document.querySelectorAll('.change-score');
const displayElem = document.querySelector('#display');


(function createCounter(){
    let counter = 0;
    for (let i = 0; i < scoreBtns.length; i++) {
        scoreBtns[i].addEventListener('click', function(event){
            counter += Number(event.target.dataset.changeAmount);
            displayElem.textContent = counter;
        });
    }
})();