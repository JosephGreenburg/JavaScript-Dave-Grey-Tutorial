
// First Code Challenge
function displayRandomLetter() {
    // Get input value of the input field.
    let myName = document.getElementById("nameEntryInput").value;
    // Remove any spaces from the text entered using a simple regex.
    let myNameWithoutSpaces = myName.replace(/\s/g, '');
    // Generate a random letter using Math.random to select a random index from the entered text.
    // let randomNameLetter = myNameWithoutSpaces[Math.floor(Math.random() * myNameWithoutSpaces.length)];
    //*** Daves example after I completed this project. I did not know about charAt() until I saw this video.
    //*** let randomNameLetter = myNameWithoutSpaces.charAt(Math.floor(Math.random() * myNameWithoutSpaces.length));
    //Select the <p> element to use to add the letter to.
    let pLetter = document.getElementById("randomLetter");
    // Add randomNameLetter value to the <p> element. 
    pLetter.textContent = "Random Letter from the name: " + randomNameLetter;
};

//Add an event listener to call the displayRandomLetter() function when the button is clicked.
let btn = document.getElementById("nameEntryButton");
btn.addEventListener('click', function() {
    displayRandomLetter();
});

//Add an event listener to call the displayRandomLetter() function when the enter key is pressed.
let enterKey = document.getElementById("nameEntryInput");
enterKey.addEventListener('keypress', function(event) {
    if(event.key === "Enter") {
        displayRandomLetter();
    }
});



//Stuff I went through before consolidating the random letter generator to one line.
//test name variable
// console.log(myName);

//Set a variable to set myName length
// let nameLength= myName.length;

//Check nameLength
// console.log(nameLength);

//Set a variable for a random number to be used as the index

// let randomIndex = Math.floor(Math.random() * nameLength);

//Test ranomIndex
// console.log(randomIndex);

// let randomLetter = console.log(myName[randomIndex]);
// console.log(randomLetter);

//Prevent spaces from appearing - Work in progress.
// let onlyLetters = myName.replace(/\s/g,'');
// console.log(onlyLetters);

//Code I went to before refining the program to capture the random letter on index.html

//Set variables.
// let userInput = document.getElementById("nameEntryInput");
// let btn = document.getElementById("nameEntryButton");
// let storedName = ""; // Define storedName outside of the event listener
// let pLetter = document.getElementById("randomletter");


//Attempting event listeners for both button click and enter press.

// Event listener for enter button instead of clicking on the submit button
// userInput.addEventListener("keypress", function(enterPress){
//     if (enterPress.key === "Enter") {
//         enterPress.preventDefault();
//         document.getElementById("nameEntryButton").click();
//         console.log("Enter");
//         storedName = userInput.value; // Update the value of storedName
//     }
// });

// btn.addEventListener('click', function() {
//     console.log("button click");
//     storedName = userInput.value; // Update the value of storedName when button is clicked
// });

// console.log(storedName);