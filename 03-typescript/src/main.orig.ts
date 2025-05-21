const theMeaningToLifeTheUniverseAndEverything = 42;

let a: boolean = true;
let b: number = 1;
let c: string = "Paul";
let d: null = null;
let e: undefined = undefined;
let f: symbol = Symbol('Paul');
let g: bigint = 2n;
let h: any = 123;
let i: unknown = theMeaningToLifeTheUniverseAndEverything;

// type guard
if(typeof i === 'string') {
  i.toLowerCase();
}

//union type
let j: string | number | boolean = theMeaningToLifeTheUniverseAndEverything;
j = 'Paul';
j = true;

// inferred type
let k = theMeaningToLifeTheUniverseAndEverything; // number

// custom type
type MyUnion = string | number | boolean;
type AnotherOne = boolean;

let l: MyUnion | AnotherOne = theMeaningToLifeTheUniverseAndEverything;

l = true;


console.log(a, b, c, d, e, f, g, h, i, j, k, l);

// destructuring
// default parameters
// array prototype methods: map, filter
// arrow function
// let, const => scope


// Complex Types
// Objects, Arrays, Functions, Maps, and Sets

const fruit: (string | number)[] = ['Apples', 'Oranges', 'Strawberries'];

fruit.push(theMeaningToLifeTheUniverseAndEverything);

// type ArrType = (string | number)[];

console.log(fruit);

type Person = {
  firstName: string;
  lastName?: string;
  age: number;
  height: number;
  weight: number;
  calculateBmi(): string;
};
// Matt Pocock

interface IPerson {
  firstName: string;
  lastName?: string;
  age: number;
  height: number;
  weight: number;
  calculateBmi(): string;
}

const person1: Person = {
  firstName: 'Paul',
  age: 40,
  height: 1.85,
  weight: 100,
  calculateBmi() {
    return (this.weight / this.height ** 2).toFixed(2);
  }
};

const person2: IPerson = {
  firstName: 'Adi',
  lastName: 'Moldovan',
  age: 39,
  weight: 80,
  height: 1.75,
  calculateBmi() { return ''}
};

// type Admin = Person & { isAdmin: boolean };
interface IAdmin extends IPerson {
  isAdmin: boolean;
}

const person3: IAdmin = { 
  ...person2,
  firstName: 'Test',
  isAdmin: true,
};

console.log(person1, person2, person3);

console.log(person2.calculateBmi === person3.calculateBmi);


function add(num1: number, num2: number) {
  return num1 + num2;
}

// const res = add(3, 6);

function multiply(...numbers: number[]) {
  return numbers.reduce((num1, num2) => num1 * num2);
}

function prettyPrint(calc: (...nums: number[]) => number, ...args: number[]) {
  return `The result of the calculation is: ${calc(...args)}`;
}

console.log(prettyPrint(add, 5, 12));
console.log(prettyPrint(multiply, 2, 3, 7, 8));


