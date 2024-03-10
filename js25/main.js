/**
 * Higher Order Functions
 * 
 * A higher order function is a function that does at least one of the following:
 * 
 * - Takes one or more functions as an argument (parameter)
 * - Returns a function as a result
 * 
 * Functions being used in this tutorial:
 * - forEach()
 * - filter()
 * - map()
 * - reduce()
 */

// Import example data
import { posts } from "./posts.js";

/**
 * forEach() - functions similarly to a for() loop. 
 */

posts.forEach(post => {
    console.log(post);
});
console.clear();

//filter() - Can return certain data from the JSON - This returns all posts by userId 1.
const filteredPosts = posts.filter(post => {
    return post.userId === 5;
});
console.log(filteredPosts);

//map() - Can adjust the data using the filtered data above
const mappedPosts = filteredPosts.map(post => {
    return post.id * 10;
});
console.log(mappedPosts); //Multiplies the `id` by 10

//reduce() - From MDN: The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
});

console.log(reducedPostsValue);