//Rock Paper Scissors - Switchcase with if statements
let playerOne = "scissors";
let computer = "rock";

switch(playerOne) {
    case computer:
        console.log("Tie Game!");
        break;
    case "rock":
        if(computer === "paper") {
            console.log("Computer Wins")
        } else {
            console.log("Player wins");
        }
        break;
    case "paper":
        if(computer === "scissors") {
            console.log("Computer Wins")
        } else {
            console.log("Player wins");
        }
        break;
    case "scissors":
        if(computer === "rock") {
            console.log("Computer Wins")
        } else {
            console.log("Player wins");
        }
        break;
    default: 
        console.log("Pick rock, paper, or scissors.")

}
