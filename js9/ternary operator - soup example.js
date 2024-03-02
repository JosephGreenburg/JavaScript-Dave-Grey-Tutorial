//Conditionals: Ternary Operator

//Syntax
//condition ? ifTrue : ifFalse;

let soup = "Chicken Noodle Soup";
let isCustomerBanned = false;
//Example of chaining ternary operators
let soupAccess = isCustomerBanned 
? "Sorry, no soup for you!"
: soup
? `Yes, we ${soup} soup today.`
: "Sorry, no soup today.";

console.log(soupAccess);