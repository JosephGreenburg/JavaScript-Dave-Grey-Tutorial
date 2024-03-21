/**
 * Fetch API - The reasons we have fetch APIs is to requesting data from another server or another API. We want to wait for the data, before moving on with the code.
 * 
 * Requires a discussion of:
 * - Callbacks - functions that are passed as a parameter within another function. Creates a chain of events. 
 * - Promises - Promise(x, y) => {};
 * - resolve(), reject()
 * - Thenables - .then();
 * - Async/Await
 * - setTimeout()
 * 
 */

/**
 * Callbacks - functions that are passed as a parameter within another function. Creates a chain of events. 
 */

// function firstFunction(parameter, callback) {
//     //Do Stuff
//     callback();
// }

/**
 * Example of "callback hell"
*/

// firstFunction(parameter, function(){
//     secondFunction(parameter, function() {
//         thirdFunction(parameter, function() {
//         })
//     })
// })

/**
 * Promises - Promise(param1, param2) => {} - Are a way to get rid of the callback hell. They have three states: Pending, Fulfilled, Rejected. Uses Async code.
 */

// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if(!error) {
//         resolve("Yes! Resolved the promise");
//     } else {
//         reject("No! Rejected the promise");
//     }
// });

// console.log(myPromise);

/**
 * Thenables then(); - Chaining together .then() is possible
 */

// myPromise
// .then(value => {
//     return value;
// })
// .then(newValue => {
//     console.log(newValue);
// })
// .catch(err => {
//     console.log(err);
// });

/**
 * myNextPromise example
 */

// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve("myNextPromise resolved!");
//     }, 3000);
// });

// myNextPromise.then(value => {
//     console.log(value);
// });

// myPromise.then(value => {
//     console.log(value);
// });

/**
 * Pending 
 */

// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users);//will console.log "Promise {<pending>}"

//Using a thenable block
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     data.forEach(user => {
//         console.log(user);//Responds with the json objects.
//     })
// });

// console.log(users);//The Global will console.log "Promise {<pending>}", since it is out of the Fetch/thenable block.


/**
 *  Async / Await
 */

/**
 * Example 1
 */
// const myUsers = {
//     userList: []
// }

// const myCoolFunction = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
//     // console.log(jsonUserData);
//     return jsonUserData;
// }

// // myCoolFunction();

// const anotherFunction = async () => {
//     const data = await myCoolFunction();
//     // console.log(data);
//     myUsers.userList = data;
//     console.log(myUsers.userList);//It is awaiting in the function.
// }

// anotherFunction();
// console.log(myUsers.userList);//Is not awaiting, will not be set.

/**
 * Example 2 - Work function
 */

// const getAllUserEmails = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
//     const userEmailArray = jsonUserData.map(user => {
//         return user.email;
//     });

//     // console.log(userEmailArray);
//     // return userEmailArray;
//     postToWebPage(userEmailArray);//Use a function to display the information.
// }

// // getAllUserEmails();
// // console.log(getAllUserEmails());//Will not work. It is not awaiting outside the fetch block.
// const postToWebPage = (data) => {
//     console.log(data);
// }

// getAllUserEmails();

/**
 * Example 3 - Get Dad Joke - Request
 */

// const getDadJoke = async () => {
//     const response = await fetch("https://icanhazdadjoke.com/", {
//         method: "GET",
//         headers: {
//             Accept: "application/json"
//             // Accept: "text/plain"
//         }
//         }
//     );
//     const jsonJokeData = await response.json();
//     // const textJokeData = await response.text();
//     console.log(jsonJokeData);//Will return id, status and any other information on the object
//     // console.log(jsonJokeData.joke);//Will only return the joke key and value.
//     // console.log(textJokeData);//Will only return the joke key and value.
// }

// getDadJoke();

/**
 * Example 4 - Post Data
 */

// const jokeObject = {
//     "id": "dpWvHtW0Tnb",
//     "joke": "What's orange and sounds like a parrot? A Carrot.",
// };

// const postData = async (jokeObj) => {
//     const response = await fetch("https://httpbin.org/post", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(jokeObj)
//     });
//     const jsonResponse = await response.json();

//     console.log(jsonResponse);
// }

// postData(jokeObject);

/**
 * Example 5 - Posting data into the parameters
 */

// const requestJoke = async (firstName, lastName) => {

//     const response = await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`);//Site doesn't work. 
//     const jsonResponse = await response.json();

//     console.log(jsonResponse.value.joke);
// }

// requestJoke("Clint", "Eastwood");

/**
 * Example 6 
 */


const getDataForm = () => {
    const requestObject = {
        firstName: "Joe",
        lastName: "Green",
        catagories: ["nerdy"]
    };
    return requestObject;
}

const buildRequestUrl = (requestData) => {
    return `https://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&${requestData.catagories}`;
}

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
    console.log(joke);
}

//Procedural workflow function for the functions above. 

const processJokeRequest = async () => {
    const requestData = getDataForm();
    const url = buildRequestUrl();
    await requestJoke(requestUrl);
    console.log("finished");
}

processJokeRequest();