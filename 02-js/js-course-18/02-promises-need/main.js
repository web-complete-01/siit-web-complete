const categoriesAPIUrl = `https://api.chucknorris.io/jokes/categories`;

// get the data
function getApiData(displayFunction) {
    fetch(categoriesAPIUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayFunction(data);
        })
}

// adds categories in the unordered list
function createListItems(data) {
    const ul = document.querySelector('#list');
    data.forEach(category => {
        const li = document.createElement('li');
        li.textContent = category;
        ul.append(li);
    });
}

// adds categories as dropdown options
function createDropdownOptions(data) {
    const dropdown = document.querySelector('#categories-dropdown');
    data.forEach(category => {
        const option = document.createElement('option');
        option.textContent = category;
        option.value = category;
        dropdown.append(option);
    });
}

getApiData(createDropdownOptions);