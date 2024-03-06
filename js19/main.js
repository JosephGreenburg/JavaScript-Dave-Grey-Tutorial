/**
 * Json - JavaScript Object Notation
 * 
 * JSON is used to send and receive data
 * JSON is a text format that is completely language independant
 * Meaning JSON is used to send & receive data in many languages
 * ...no just in JavaScript
 */

/**
 * Example 1
 */

const myObject = {
    name: "Joe",
    hobbies: ["eat", "jog", "game"],
    hello: function () {
        console.log("Hello");
    }
};

console.log(myObject);
console.log(myObject.name);
myObject.hello();
console.log(typeof myObject);

const sendJSON = JSON.stringify(myObject); //The method `hello` will be lost once stringified.
console.log(sendJSON); //Output String of the object
console.log(typeof sendJSON); //String
console.log(sendJSON.name); //Output undefined. Since this has been stringified properties will not be accessible as they were before. 

const receiveJSON = JSON.parse(sendJSON); //Parses the string and creates an object. 
console.log(receiveJSON); //Output is an object. 
console.log(typeof receiveJSON); //Object