console.log('Array methods presentation');

const students = [
    {
        name: 'Adi',
        location: 'BV',
        grade: 6.68
    },
    {
        name: 'Ion',
        location: 'B',
        grade: 7.55
    },
    {
        name: 'Ana',
        location: 'CJ',
        grade: 7.01
    },
    {
        name: 'Andy',
        location: 'B',
        grade: 9.08
    }
];

// foreach(): list all students and the grades
console.log(``);
console.log(` ==== Array forEach === `);
students.forEach((s, i) => console.log(i + 1 + '. ' +  s.name + ': ' + s.grade));

// map (): creates a modified copy of the initial array
console.log(``);
console.log(` ==== Array map === `);
// extracts  the grade property and adds 0.5
const modStudents = students.map(s => s.grade + 0.5);
modStudents.forEach(s => console.log(s))

// maps the students and for the grade property adds 0.5
const mod1Students = students.map(s => {
   return {
        ...s,   // creates a copy of the element
        grade: s.grade + 0.5 // changes the grade property 
   }
});
mod1Students.forEach(s => console.log(s));

// filter()
console.log(``);
console.log(` ==== Array filter === `);
const filteredStudents = students.filter(s => s.location === 'B');
console.log('Students with location B');
filteredStudents.forEach(s => console.log(`${s.name}: ${s.location}`));

const filtered1Students = students.filter(s => s.grade >= 7);
console.log('Students with grade greater than 7.00');
filtered1Students.forEach(s => console.log(`${s.name}: ${s.grade}`));

// sort()
console.log(``);
console.log(` ==== Array sort === `);

console.log('Students ordered acending by the grade');
students.sort((a, b) => a.grade - b.grade);
students.forEach(s => console.log(s));

console.log('Students ordered descending by the grade');
students.sort((a, b) =>  b.grade - a.grade);
students.forEach(s => console.log(s));

console.log('Students ordered ascending by the name');
students.sort((a, b) =>  {
    if(a.name < b.name){
        return -1
    }

    if(a.name === b.name){
        return 0
    }

    return 1    
});
students.forEach(s => console.log(s));