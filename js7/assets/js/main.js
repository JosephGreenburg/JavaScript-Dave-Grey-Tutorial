// Conditionals: If Statements


//Syntax:

// Set customer is banned - if true all of other statements in the block will not be executed
let customerIsBanned = false;

// Set crackers as another argument to check
let crackers = false;
// Set variable soup - else if the soup exists then it will give the customer their soup.
let soup = "Chicken Noodle Soup";

// Set variable reply - else if a message will be set to the variable. 
let reply;


if(customerIsBanned) {
    reply = "No soup for you!"; 
} else if(soup && crackers) {
    // Temperate literal string
    reply = `Here's your order of ${soup} and crackers.`;

} else if (soup) {
    // Temperate literal string
    reply = `Here's your order of ${soup}`;

} else {
    reply = "Sorry, we're out of soup.";
}

console.log(reply);