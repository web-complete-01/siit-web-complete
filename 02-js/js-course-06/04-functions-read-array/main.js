console.log('functions: reading an array');


function readGrades(studentName){
    alert(`Input grades for student: ${studentName}`);

    let gradesNr = prompt('Input the number of grades: ');
    gradesNr = Number(gradesNr);

    const grades = [];
    for (let i = 0; i < gradesNr; i++) {
        grades[i] = prompt(`Input grade ${ i+ 1}: `)
        grades[i] = Number(grades[i]);
    }

    return grades;
}


let student1Grades = readGrades('Ana')
let student2Grades = readGrades('Adi')