/**
 * Secondary js file to go with Main. 
 * 
 * Exporting arrow functions
 * 
 * Export Default
 * 
 * Export
 */

/**
 * Exporting arrow functions
 */
// const playGuitar = () => {
//     return "Playing Guitar";
// }

// const shredding = () => {
//     return "Shredding some licks!";
// }

// const plucking = () => {
//     return "Plucking the strings...";
// }

//Export the function. Can also be done inline.
// export default playGuitar;
// export { shredding, plucking };


/**
 * Exporting inline
 */
export default function playGuitar() {
    return "Playing Guitar";
}

export const shredding = () => {
    return "Shredding some licks!";
}

export const plucking = () => {
    return "Plucking the strings...";
}