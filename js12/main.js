//Loops and Iteration

let myNumber = 50;
//While

// while(myNumber <= 50) {
//     console.log(myNumber);
//     myNumber++;
// }

//Do

// do {
//     console.log(myNumber);
// } while(myNumber < 50);

//For

// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let firstName = "Joseph";

// for (let i = 0; i < firstName.length; i++) {
//     console.log(firstName.charAt(i));
// }


//While True
let firstName = "Joseph";
let counter = 0;
let myLetter;
while(counter <= 3) {
    myLetter = firstName[counter];
    console.log(myLetter);
    if(counter === 1) {
        counter += 2;
        continue; //continues through the loop
    }
    if(myLetter === "s") break;
    counter++;
}
