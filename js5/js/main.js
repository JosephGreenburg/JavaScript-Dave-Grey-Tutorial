/**
 * Math Methods and Properties
 * - Math.PI
 * - Math.trunc()
 * - Math.floor()
 * - Math.round()
 * - Main.min(x, y, z)
 * - Math.max(x, y, z);
 * - Math.random()
 */

//Math.PI, 
console.log(Math.PI);

//Math.trunc
console.log(Math.trunc(Math.PI));

//Math.floor
console.log(Math.floor(Math.PI));

//Math.round
console.log(Math.round(Math.PI));

//Math.min
console.log(Math.min(2, 0.5, 9));

//Math.max
console.log(Math.max(2, 0.5, 9));

//Math.random: 
//Returns a range from 0 to 1 that includes 0 but not 1
console.log(Math.random());
//From 1 to 10:
//Math.ceil(Math.random() * 10) has a chance of resulting in zero.
//Math.floor(Math.random() * 10 + 1) is the way to go.
console.log(Math.floor(Math.random() * 10 + 1));

