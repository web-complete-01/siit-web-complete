console.log('main.js is running!');

const userForm = document.querySelector(`#user-form`);
console.log(userForm);

userForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    const formData = new FormData(userForm);
    const formDataJSON = Object.fromEntries(formData.entries());

    const options = {
        method: 'POST',
        body: JSON.stringify(formDataJSON)
    };
    
    fetch(`http://localhost:3000/users`, options)
        .then(response => response.json())
        .then(data => console.log(data))
})