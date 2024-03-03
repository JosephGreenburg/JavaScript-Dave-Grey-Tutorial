/**
 *  Functions - Blocks of reusable code
 */

// Function Declaration Syntax:

// function sum() {
//     return 2 + 2;
// }

// console.log(sum());

// Function Declaraction, defining two parameters:
//--------------------------------------------------------
// Example 1
// function sum(num1, num2) {
//     console.log(`${num1} + ${num2}`);
//     return num1 + num2;
// }

// console.log(sum(2, 8));
//--------------------------------------------------------
// Example 2
// function sum(num1, num2) {
//     console.log(`${num1} + ${num2}`);
//     if(num2 === undefined) {
//         return num1 + num1;
//     }
//     return num1 + num2;
// }

// console.log(sum(1, 2));

//---------------------------------------------------------
//Example 3

// function getUserNameFromEmail(email) {
//     return email.slice(0, email.indexOf('@'));
// }

// console.log(getUserNameFromEmail("userName@gmail.com"));
//---------------------------------------------------------
//Example 3.1 - Anonymous functions - If you do not provide a name it will be an anonymous function.

//Same function as above, but no name for the function. Just a declaration of a const:

// const getUserNameFromEmail = function(email) {
//     return email.slice(0, email.indexOf("@"));
// };

// console.log(getUserNameFromEmail("jgreenburg@gmail.com"));

// ---------------------------------------------------------
//Example 3.2 - Arrow functions - Removing the `function` text

// const getUserNameFromEmail = (email) => {
//     return email.slice(0, email.indexOf("@"));
// };

// console.log(getUserNameFromEmail("johndoe@gmail.com"));

//----------------------------------------------------------
//Example 3.3 - Another anonymous arrow function - Change the first character to a capital letter. 

// const toProperCase = (firstName) => {
//     return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
// }

// console.log(toProperCase("joseph greenburg"));
