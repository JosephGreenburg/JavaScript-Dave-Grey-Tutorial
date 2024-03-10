/**
 * Second example - importing modules - Classes
 */

import User from "./users.js"; //Import class
const me = new User("email@email.com", "Joe"); //Call class and use a constant to store it
console.log(me); //console log the output.
console.log(me.greeting()); //Use a method from the class. 