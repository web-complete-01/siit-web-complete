console.log('Arrays DEMO');

/**
 * Reading values in an array
 */
let studentsNr = prompt(`How many students are attending the course?`);
studentsNr = Number(studentsNr);

let students = [];
for (let i = 0; i < studentsNr; i++) {
    students[i] = prompt(`Input the name of student ${i + 1}`);

    // const newStudent = prompt(`Input the name of student ${i + 1}`);
    // students.push(newStudent);
}


/**
 * Displaying each element of an array
 */
for (let i = 0; i < students.length; i++) {
    alert(students[i]);
}

