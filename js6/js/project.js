//Write code to capture and display on the page.


let userInput = document.getElementById("nameEntryInput");
let btn = document.getElementById("nameEntryButton");
let storedName = ""; // Define storedName outside of the event listener
let pLetter = document.getElementById("randomletter");


//All the below is commented out until I get the basic version down. 

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