console.log('CRUD');

const resource = `authors`
const endpoint = `https://demo-api.siit.ro/api/${resource}`;
const headers = {
        "Content-type": "application/json",  // optional
        "Accept": "application/json"
    };

const authorsList = document.querySelector('#authors-list');

/**
 * POST
 */
const postOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify({name: 'Charles Bukowski'})
}
fetch(endpoint, postOptions)
    .then(function(response){
        return response.json()
    }) 
    .then(function(data){
        console.log(data)
    });


/**
 * PUT
 */
// const putOptions = {
//     method: 'PUT',
//     headers,
//     body: JSON.stringify({name: 'Charles Bukowski - v2'})
// }
// fetch(`${endpoint}/30`, putOptions)
//     .then(function(response){
//         return response.json()
//     }) 
//     .then(function(data){
//         console.log(data);
//     });


/**
 * DELETE
 */
// const putOptions = {
//     method: 'DELETE',
//     headers
// }
// fetch(`${endpoint}/30`, putOptions)
//     .then(function(response){
//         return response.json()
//     }) 
//     .then(function(data){
//         console.log(data);
//     });


/**
 * GET Authors collection
 */
fetch(endpoint)
    .then(function(response){
        return response.json()
    }) 
    .then(function(data){
        for (let i = 0; i < data.length; i++) {
            const li = document.createElement('li');
            li.textContent = `${data[i].name} | ${data[i].updated_at}`;
            authorsList.append(li);
        }
    });

