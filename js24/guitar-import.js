/**
 * Modules
 * 
 * Must have a local server/live server/apache2 server to use modules
 * 
 * Change the type to module on the linking script - automatically applies `defer` keyword and `use strict;`, but also lets the page load before the script.:
 * <script type="module" src="main.js"></script>
 * 
 * Exporting to another file
 * 
 * Importing something from another file
 * 
 * `import`
 *
 * import `as`
 * 
 * import all or `*`
 */


/**
 * Importing playGuitar from guitars.js
 */

//Normal import
// import playGuitar, {shredding, plucking } from "./guitars.js";

// console.log(playGuitar());
// console.log(shredding());
// console.log(plucking());

//Importing `as`, to differentiate the naming convention.
// import playGuitar, {shredding as shred, plucking as pluck} from "./guitars.js";

//using `as` import
// console.log(shred());
// console.log(pluck());


//Import All
// import * as Guitars from "./guitars.js";

// console.log(Guitars.default());//Needs to be default or it won't work
// console.log(Guitars.shredding());
// console.log(Guitars.plucking());





