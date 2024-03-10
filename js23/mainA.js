/**
 * Web Storage API
 * 
 * Not part of the DOM - refers to the Window API
 * 
 * We do not have a type window. It is implied.
 */

//Both will send an alert

// window.alert("okay");//First alert
// alert("2nd alert");//Second alert

//`window.location` -

// window.alert(window.location);//Displays local host IP Address, Port, and directory path.

const myObject = {
    name: "Joe",
    hobbies: ["code", "games", "jokes"],
    logName: function() {
        console.log(this.name);
    }
};

const myArray = ["code", "games", "jokes"];

//logName()
// myObject.logName();//Output `Joe`
/**
 * Storing data using sessionStorage and localStorage. These methods only store string data. 
 */
//sessionStorage syntax and method
// window.sessionStorage
/**
 * sessionStorage - setItem
 */
// sessionStorage.setItem("mySessionStorage", myObject);//myObject stores a typeOf string, and JSON(or [object object]) on the console.
// sessionStorage.setItem("mySessionStorage", myArray);//myArray stores a string instead of an array

//Using JSON.stringify
// sessionStorage.setItem("mySessionStorage", JSON.stringify(myObject));//Displays the object without the function as a string in the console.

//using setItem on myArray, applying JSON.stringify.
sessionStorage.setItem("mySessionStorage", JSON.stringify(myArray));

/**
 * sessionStorage - getItem
 */
//mySessionData without using JSON parse
// const mySessionData = sessionStorage.getItem("mySessionStorage");

//mySessionData using JSON parse - returns the string as an array or object
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStorage"));

// console.log(typeof mySessionData);
// console.log(mySessionData);

//localStorage syntax
// window.localStorage
/**
 *localStorage - setItem
 */

// Using myObect
// localStorage.setItem("myLocalStorage", JSON.stringify(myObject));
// Using myArray
localStorage.setItem("myLocalStorage", JSON.stringify(myArray));

/**
 * localStorage - getItem
 */
const myLocalData = JSON.parse(localStorage.getItem("myLocalStorage"));
console.log(typeof myLocalData);
console.log(myLocalData);