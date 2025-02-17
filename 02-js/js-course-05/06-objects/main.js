console.log('Objects in JS');

const player = {
    name: 'Relu👦',
    huntingSkill: 5,
    maxHP: 100,
    currentHP: 85
}

const food = [
    {
        name: "Banana",
        icon: `🍌`,
        hp: 15,
        requiredSkill: 3
    },
    {
        name: "Cherry",
        icon: `🍒`,
        hp: 10,
        requiredSkill: 2
    },
    {
        name: "Rabbit",
        icon: `🐇`,
        hp: 35,
        requiredSkill: 6
    },
    {
        name: "Duck",
        icon: `🦆`,
        hp: 35,
        requiredSkill: 8
    },
    {
        name: "Fish",
        icon: `🐟`,
        hp: 30,
        requiredSkill: 7
    },
];


let randomIndex = Math.floor(Math.random() * food.length);
console.log(food[randomIndex]);