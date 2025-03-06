console.log('To do list');

const taskInput = document.querySelector('#new-task');
const taskList = document.querySelector('#to-do-list');
const addTaskBtn = document.querySelector('#add-task');

addTaskBtn.addEventListener('click', function(){
    // check if the new task has any characters
    if(!taskInput.value.length){
        alert('Specify a task name!')
        return;
    }

    // add a new task in the list
    const newLi = document.createElement('li');
    newLi.textContent = taskInput.value;
    taskList.append(newLi);

    // create an event listener on the recently added element
    newLi.addEventListener('click', function(event){
        console.log('A click event has been triggered!');
        console.log(event.target);

        // event.target.remove();
        event.target.classList.toggle('done');
    });

    // clear the input texbox
    taskInput.value = '';
});