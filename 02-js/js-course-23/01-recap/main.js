class DiceComponent {
    constructor(parentElement, currentValue = 1) {
        this.parentElement = parentElement;
        this.img = null;    // not actually necessary
        this.sideImgs = []; // not actually necessary

        this.setSideImgs();
        this.createComponentElements();
        this.setValue(currentValue);
    }

    setSideImgs(sideImgs = []) {
        if (sideImgs.length == 0) {
            this.sidesImgs = [
                'imgs/a.svg',
                'imgs/b.svg',
                'imgs/c.svg',
                'imgs/d.svg',
                'imgs/e.svg',
                'imgs/f.svg'
            ];
        }
        else {
            this.sidesImgs = sideImgs;
        }
    }

    createComponentElements() {
        const diceContainter = document.createElement('div');
        diceContainter.classList.add('dice-container');
        this.parentElement.append(diceContainter);

        this.img = document.createElement('img');
        diceContainter.append(this.img);
    }

    setValue(newValue) {
        if (newValue < 1 || newValue > 6) {
            console.error(`Invalid specified value: ${newValue}`);
            return
        }
        this.img.src = this.sidesImgs[newValue - 1];
    }
}


class NumberDiceComponent {
    constructor(parentElement, currentValue = 1) {
        this.parentElement = parentElement;
        this.diceContainter = null;

        this.createComponentElements();
        this.setValue(currentValue);
    }

    createComponentElements() {
        this.diceContainter = document.createElement('div');
        this.diceContainter.classList.add('dice-container', 'number-dice-container');
        this.diceContainter.textContent = '';
        this.parentElement.append(this.diceContainter);
    }

    setValue(newValue) {
        if (newValue < 1 || newValue > 6) {
            console.error(`Invalid specified value: ${newValue}`);
            return
        }
        this.diceContainter.textContent = newValue;
    }
}


class DiceSet {
    constructor(parentElement, diceNumber = 2) {
        const diceSetContainer = document.createElement('div');
        diceSetContainer.classList.add('dice-set-container');
        parentElement.append(diceSetContainer);

        this.diceComponents = [];
        for (let i = 0; i < diceNumber; i++) {
            // const diceComponent = new DiceComponent(diceSetContainer);
            const diceComponent = new NumberDiceComponent(diceSetContainer);
            this.diceComponents.push(diceComponent);
        }
    }

    setDiceValue(diceIndex, newValue) {
        this.diceComponents[diceIndex].setValue(newValue);
    }

    setAllDiceValues(newValuesArray) {
        newValuesArray.forEach((newValue, i) => this.setDiceValue(i, newValue));
    }
}



const contanier = document.querySelector('.container');


const diceSet = new DiceSet(contanier);
diceSet.setAllDiceValues([2, 6]);

const diceSet2 = new DiceSet(contanier, 6);
diceSet2.setDiceValue(0, 5);
diceSet2.setDiceValue(1, 4);


// const newDiceType = new NumberDiceComponent(contanier);