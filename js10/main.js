//User input

// alert("User Input");
//let alertWindow = alert("Hello World");

//Confirm - Different than alert(). The console will use the value true/false depending
//on which button the user clicks on the pop-up.

// let myBoolean = confirm("Okay === True\nCancel === False");
// console.log(myBoolean);

//Prompt is similar to alert() and confirm(), but whatever the user types in
//in will be kept data.

// let name = prompt("Please enter your name: ");

if (name) {
    console.log(name)
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
} else {
    console.log("You didn't enter your name?");
}

