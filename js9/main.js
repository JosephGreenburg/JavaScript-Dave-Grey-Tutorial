//Conditionals - Ternary Operator - Rock, Paper, Scissors

//Syntax 
//Condition ? ifTrue: ifFalse;

let playerOne = "paper";
let computer = "scissors";

let  results = playerOne === computer ? "Tie Game"
: playerOne === "rock" && computer === "paper" ? "Computer wins"
: playerOne === "paper" && computer === "scissors" ? "Computer wins"
: playerOne === "scissors" && computer === "rock" ? "Computer wins"
: "Player One Wins!";

console.log(results);