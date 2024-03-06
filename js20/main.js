/**
 * JavaScript Errors and Error Handling - Try, Catch, Finally
 */

/**
 *  `Use Strict` method
 */

"use strict";

// variable = "Dave";//Variable not defined. Using "use strict" will produce an error in the console; variable not defined.
// console.log(variable);

// const variable = "Dave"; //Using const this will not produce an error.
// console.log(variable);

// Object..create(); //Unexpected token

// const name = "Joe";
// name = "Greenburg"; //TypeError: Assignment to constant variable.


/**
 * Example 1 .error, .warn, .stack, .message, .table
 */

// const makeError =() => {
//     try {
//         throw new customError("This is a custom error.")
//         // const name = "Joe";
//         // name = "Green";//TypeError: Assignment to constant variable.
//     } catch(err) {
//         //.error
//         console.error(err);

//         //.error with .message
//         console.error(err.message);

//         //.error with .stack
//         console.error(err.stack);

//         //logTheError
//         // logTheError(err.stack);

//         //.warn
//         console.warn(err);

//         //.table
//         console.table(err);
//     }
// }
// makeError();

/**
 * Example 2 - Throw, customError, finally block
 */
const makeError =() => {
    let i = 1;
    while(i <= 5) {
        try {
            if (i % 2 !== 0) { 
                throw new customError("Odd Number.");
            }
            console.log("Even Number.");
        } catch (err) {
            console.error(err.stack);
        } finally {
            console.log("Finally");
            i++;
            console.log(i);
        } 
    }
};
makeError();

function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
}