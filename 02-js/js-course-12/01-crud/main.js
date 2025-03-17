console.log('CRUD');


/**
 * GET REQUEST ON STUDENTS COLLECTION
 */
// fetch('https://demo-api.siit.ro/api/students')
//     .then(function(response){
//         return response.json()
//     }) 
//     .then(function(data){
//         console.log(data);
//     });


/**
 * POST REQUEST ON STUDENTS COLLECTION
 */
// const postOptions = {
//    method: "POST",
//    headers: {
//     "Content-type": "application/json",  // optional
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     name: "Adi Webcomplete-01",
//     email: "adi@webcomplete-01.com"
//   })
// };

// fetch('https://demo-api.siit.ro/api/students', postOptions)
//     .then(function(response){
//         return response.json()
//     }) 
//     .then(function(data){
//         console.log(data);
//     });


const resourceId = 49;

/**
 * PUT REQUEST ON STUDENTS COLLECTION
 * resource id: 49
 */
// const putOptions = {
//     method: "PUT",
//     headers: {
//      "Content-type": "application/json",  // optional
//      "Accept": "application/json"
//    },
//    body: JSON.stringify({
//      name: "Adi Updated 1 Webcomplete-01",
//      email: "adi1@webcomplete-01.com"
//    })
//  };
 
//  fetch(`https://demo-api.siit.ro/api/students/${resourceId}`, putOptions)
//      .then(function(response){
//          return response.json()
//      }) 
//      .then(function(data){
//          console.log(data);
//      });


/**
 * DELETE REQUEST ON STUDENTS COLLECTION
 * resource id: 49
 */
// const deleteOptions = {
//     method: "DELETE",
//     headers: {
//      "Content-type": "application/json",  // optional
//      "Accept": "application/json"
//    }
//  };
 
//  fetch(`https://demo-api.siit.ro/api/students/${resourceId}`, deleteOptions)
//      .then(function(response){
//          return response.json()
//      }) 
//      .then(function(data){
//          console.log(data);
//      });

/**
 * GET REQUEST ON STUDENT RESOURCE
 * resource id: 50
 */
fetch(`https://demo-api.siit.ro/api/students/50`)
     .then(function(response){
         return response.json()
     }) 
     .then(function(data){
         console.log(data);
     });