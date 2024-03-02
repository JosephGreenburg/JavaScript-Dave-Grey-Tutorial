// Your First Interactive Game

//Confirm the user wishes to play the game. 
let playGame = confirm("Shall we play rock, paper, or scissors?: ");
if(playGame) {

    //Prompt the user for their choice of rock, paper or scissors.
    let playerChoice = prompt("Please enter rock, paper or scissors: ");

    //If the choise was made, format the answer by trimming white space and setting it to lowercase
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        //Check if the text is actually trimmed, lowercase and matches the string exactly.
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {

            //After setting the playerOne choice, choose at random the computers choice.    
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            //Set computers answer
            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper"
            : "scissors";
            let result = 
            playerOne === computer
                ? `playerone: ${playerOne}\nComputer: ${computer}\nTie Game`
                : playerOne === "rock" && computer === "paper"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nPlayer Wins!`;
            alert(result);
        } else {
            alert("You didn't enter rock, paper or scissors.");
        }
    } else {
        alert("I guess you changed your mind. Maybe next time.");
    }
} else {
    alert("Okay, Maybe next time.");
}