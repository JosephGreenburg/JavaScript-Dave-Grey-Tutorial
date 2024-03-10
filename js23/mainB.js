/**
 * Web Storage API
 * 
 * Not part of the DOM - referes to the Window API
 * 
 * Available to JS via the global variable: window
 * 
 * Methods used in this Lesson:
 * localStorage
 * sessionStorage
 * 
 * key() - index position
 * 
 * .length - find the length of the storage item.
 * 
 * setItem() - stores the information in storage
 * 
 * getItem() - retrieves the information in storage
 * 
 * removeItem() - removes the information from storage
 * 
 * clear() - clears the selected storage
 * 
 * JSON.stringify() - Stringifies an object or an array
 * JSON.parse() - returns the string into an object or an array. Note: functions/methods within the object are not stored.
 * 
 */

//`window` is implied; it does not need to be typed.
//Example - code lines do the same thing. One does not have `window`, alert will still appear.
// window.alert("ok!");
// alert("ok!");

// window.alert(window.location);
// alert(location);

/**
 * Session Storage
 * 
 * Local Storage
 * 
 * Not typing `window` applies to this as well.
 */

// const myArray = ["eat", "sleep", "cook"];

// const myObject = {
//     name: "Joe",
//     hobbies: ["find", "jump", "run"],
//     logName: function() {
//         console.log(this.name);
//     }
// };
// myObject.logName();


//Session Storage

/**
 * For the Object
 */
//Session setItem - Store Object
// sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
//Session getItem - Retrieve Object
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));

/**
 * For the array. 
 */
//Session setItem - Store Array
// sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
//Session getItem - Retrieve Array
// const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));

//Use `typeOf()` to see the session data. 
// console.log(mySessionData);


//Local Storage

const myArray = ["eat", "sleep", "cook"];

const myObject = {
    name: "Joe",
    hobbies: ["find", "jump", "run"],
    logName: function() {
        console.log(this.name);
    }
};

/**
 * For the object. 
 */
//localStorage setItem - Store Object
// localStorage.setItem("myLocalStorage", JSON.stringify(myObject));
//Local getItem - Retrieve Object
// const myLocalData = JSON.parse(lcoalStorage.getItem("myLocalStorage"));

/**
 * For the array. 
 */
//Local setItem - Store Array
localStorage.setItem("myLocalStorage", JSON.stringify(myArray));

//Local getItem - Retrieve Array
const myLocalData = JSON.parse(localStorage.getItem("myLocalStorage"));

/**
 * Remove item
 */
// localStorage.removeItem("myLocalStorage");
/**
 * Clear
 */
// localStorage.clear("myLocalStorage");

/**
 * Key - Grabs one index of the local storage, similar to an array element.
 */
// const key = localStorage.key(0);//First position
// console.log(key);
const storeLength = localStorage.length;
console.log(storeLength);//1

//Use `typeOf()` to see the local data. 
console.log(myLocalData);

