/**
 * Numbers
 */

/**
 * Integers - Whole number, without a decimal
 */

const myNumber = 42;
//console.log(myNumber);

/**
 * Floating number - A number with a decimal is a float which references the "floating point"
 */

const myFloat = 42.0151
// console.log(myFloat);

/**
 * String numbers - numbers within strings
 */     

const myStringNumber = "42.123abc"; 
const myStringNumberTwo = "42";
// console.log(typeof(myStringNumber));
// console.log(typeof(myStringNumberTwo));

//Number Methods
/**
 * Number() method - Using the consts above
 */
// console.log(Number(myStringNumber)); //myStringNumber returns NaN, since it contains alpha characters
// console.log(Number(myStringNumberTwo)); //myStringNumberTwo returns 42, the method can detect a number within the string.

/**
 * The Number.isInteger() method determines whether the passed value is an integer and returns a boolean
 */

// console.log(Number.isInteger(myStringNumber)); //Return false, the typeof() is string
// console.log(Number.isInteger(myStringNumberTwo)); //Return false, the typeof() is string

/**
 * The Number.parseFloat() method parses an argument and returns a floating point number.
 * - If a number cannot be parsed from the argument, it returns NaN
 */
// console.log(Number.parseFloat(myNumber)); //Returns int
// console.log(Number.parseFloat(myFloat));  //Returns float
// console.log(Number.parseFloat(myStringNumber)); //Excludes the alpha characters - returns a float

/**
 * .toFixed() method - formats a number accoding to how many decimal points you provide as the parameter.
 */
// console.log(Number.parseFloat(myFloat).toFixed()); //Returns an int from a float.

/**
 * Number.parseInt() method - parses a string argument and returns a integer.
*/
// console.log(Number.parseInt(myStringNumber)); //Excludes the alpha characters - returns an int
// console.log(Number.parseInt(myFloat)); //Excludes the decimal value - returns an int

/**
 * .toString() method - returns a string from the int given. 
 */
// console.log(Number.parseFloat(myStringNumber).toFixed(4).toString());//parses for a floating number, removes the alpha characters, sets the decimal places, and converts it into a string.
const typeOfToString = Number.parseFloat(myStringNumber).toFixed(4).toString();//Create a variable to verify typeof
// console.log(typeof(typeOfToString));

/** 
 * Number.isNaN vs .isNaN
 */

console.log(Number.isNaN("test"));//false
console.log(isNaN("test"));//true
console.log(Number.isNaN(typeOfToString));//false
console.log(isNaN(typeOfToString));//false