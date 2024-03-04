/**
 * 'var', 'let', and 'const'
 * 
 * Global = Not in a function() or {block}. Not Desirable. 
 * Local = In a function() or {block}. Not Global
 * Var = instantiates function() scoped variables.
 * Let and Const instantiate {block} scoped variables.
 * 
 * Tips:
 * 
 * - Avoid using 'var'. Stick with 'const' and 'let'
 * - Use `const` unless you need to reassign value. 
 * - Use let if you know you will reassign value.
 * /


//Initial Examples: 
//------------------------------------------------------
/**
 * var - The old way or legacy code. Allows reassignment
 */

// var x = 1;
// var x = 2;
// console.log(x);


/**
 * let - Allows reassignment. 
 */ 

// let x = 1;
// x = 2;
// console.log(x);

/**
 * const - Not reassignable. 
 */ 

// const x = 1;
// x = 2;
// console.log(x);
//---------------------------------------------------------

/**
 * Scope - global, local: block & function
 * 
 * Variable values can be passed "down", but they cannot be passed "up"
 */ 
//---------------------------------------------------------

//Global Scope

/**
 * Example 1
 */

// var x = 1;
// let y = 2;
// const z = 3;

//Local Scope: Block Scope, function


//Local: Block Scope
// {
//     let y = 4;
//     console.log(y); //defined
// }
// console.log(y); //undefined 

//Local: Function Scope
// function myFunc() {
//     const z = 5;
//     console.log(z); //defined, but function needs to be called to be displayed
// }
// console.log(z); //undefined

// console.log(myFunc()); //defined, but also has a line that is undefined?

/**
 * Example 2
 */

// function mySecondFunc() {
//     const z = 6;
//     console.log(z);
//     console.log(y);//Displays the global variable. 
//     //local block scope within a function. 
//     {
//         let y = 4;
//         console.log(y);
//     }
// }
// console.log(mySecondFunc());


/**
 * Another Example to view scope
 * 
 * Always pulling from the parent.
 * 
 * Let and Var work differently. 
 */

//Global Scope
let x = 1;
let y = 2;
const z = 3;

//Console log global scope variable values.
console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

//Declare a function - has it's own local scope
function myThirdFunc() {
    let x = 10; //Function reassignment - Entered in to show a different value of the global
    const z = 5; //Function reassignment - Entered in to show a different value of the global
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
    //Block within a function - has it's own local scope
    {
        let x = 11;//Block reassigment - Entered in to show a different value of the global
        const z = 6;//Block reassignment - Entered in to show a different value of the global
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
    //Copied from above to show what occurs if the console.log is moved below the block within the function
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}
myThirdFunc(); //display all function and block variable values.
