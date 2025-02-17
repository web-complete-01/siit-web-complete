console.log('Students presence');

/**
 * Reading values in an array
 */
let studentsNr = prompt(`How many students are attending the course?`);
studentsNr = Number(studentsNr);

let students = [];
let presence = [];
for (let i = 0; i < studentsNr; i++) {
    students[i] = prompt(`Input the name of student ${i + 1}`);
    presence[i] = confirm(`Is student ${students[i]} present?`);
}

/**
 * Displaying each element of an array
 */
for (let i = 0; i < students.length; i++) {
    // let message = `Student ${students[i]} is `;
    // if(presence[i]){
    //     alert(`${message} PRESENT 😉`)
    // }
    // else {
    //     alert(`${message} NOT PRESENT 😞`)
    // }

    alert(`Student ${students[i]} is ${presence[i] ? 'PRESENT 😉' : 'NOT PRESENT 😞'}`);
}

