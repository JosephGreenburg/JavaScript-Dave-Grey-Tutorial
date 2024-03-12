/**
 * Arrays and Data Structures
 * 
 * Methods used in this exercise:
 * - array declaraction: variable = [];
 * - push()
 * - pop()
 * - shift()
 * - unshift()
 * - delete array[x] or array
 * - splice()
 * - slice()
 * - split()
 * - reverse()
 * - concat()
 * - join()
 * - spread newArrayFromAB = [...myArrayA, ...myArrayB];
 */


//Declare an emtpy array
const myArray = [];

/**
 * Add Elements to an Array using bracket
 */

myArray[0] = "Joe"; //Adding a string to index 0
myArray[1] = 45; //Adding a int to index 1
myArray[2] = false; //Adding a boolean to index 2

// console.log(myArray);

// //Length Property
// console.log(myArray.length); //Displays the length of the array. Output 3

// //Last Element in the Array
// console.log(myArray[myArray.length - 1]); //Add `- 1` to account for the last index.

// //Targeting a single element from an array.
// console.log(myArray[1]); 

//Push, Pop, Shift, Unshift, 

/**
 * Push - Add an element to the end of an Array.
 */

myArray.push("school");
console.log(myArray); //School will show at the end of the Array.

/**
 * Pop - Method to remove last element from the end of an Array.
 */

myArray.pop();
console.log(myArray); //School will be removed from the end of the Array.

/**
 * Unshift - Method to add an element to the beginning of the Array.
 */

myArray.unshift(12); //Add 42 to the beginning of the Array.
console.log(myArray);

//Setting a constant to an array.push will display the number of elements.
const newArrayLength = myArray.push(33); 
console.log(newArrayLength); //Returns value is the new length of the array, 5.

/**
 * Shift - Method remove elements from the beginnging of an Arary
 */

const firstItem = myArray.shift();
console.log(myArray);


/**
 * Delete method - Removes the value from the element, but leaves an empty index. Attempting to access the empty index the console will return undefined.
 */
// delete myArray[0];
// console.log(myArray);

/**
 * Splice method - Use this instead of Delete. It will remove and/or replace index values.
 */
//(Index, Number of Elements, Replacing value). Number of elements can be zero to retain informaion.
myArray.splice(0, 1, "Green");
console.log(myArray);

/**
 * Slice method - Removes elements. Negative numbers can be added to the argument
 */

const originalArray = ["A", "B", "C", "D", "E", "F"];
// console.log(newArray);
//(Start, End)
const slicedArray = originalArray.slice(1, 3);
console.log(slicedArray);

/**
 * Join method - Takes all elements from the array and creates a string of the elements, divided by commas.
 */

const newString = originalArray.join();
console.log(newString);

/**
 * Split method - Divides a string into an ordered list by searching for the pattern given, and returns an Array.
 */

const splitArray = newString.split(",");
console.log(splitArray);

/**
 * Reverse method - Reverses the elements. 
 */

const reversedArray = originalArray.reverse();
console.log(reversedArray);

/**
 * Concat method - Joins two existing arrays.
 */

const myArrayA = ["G", "H", "I"]; 
const myArrayB = ["J", "K", "L"];

const concatArray = myArrayA.concat(myArrayB);
console.log(concatArray);

//Try it in the opposite order
const concatArrayBA = myArrayB.concat(myArrayA);
console.log(concatArrayBA);

/**
 * Spread operator - Create a new array from the elements of one or more arrays.
 */

const spreadArray = [...myArrayA, ...myArrayB];
console.log(spreadArray);

/**
 * Multidemensional Array - An array within an array. And Accessing elements from all using bracket notation.
 */

const equipmentShelfA = ["baseball", "football", "volleyball"];
const equipmentShelfB = ["basketball", "golf ball", "tennis ball"];

const clothesShelfA = ["Sweat tops", "Sweat pants", "Hoodies"];
const clothesShelfB = ["tank tops", "t-shirts", "jerseys"];

//Single Dimension Index Access
console.log(equipmentShelfA[1]);
//or
console.log(clothesShelfA[0]);

//Multidimension Index Access

const equipDept = [equipmentShelfA, equipmentShelfB];
console.log(equipDept);
const clothesDept = [clothesShelfB, clothesShelfA];
console.log(clothesDept);

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

//Adding another dimension
const sportsStore = [equipDept, clothesDept];
console.log(sportsStore);

console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);

