/**
 * Refactoring rock, paper, scissors game.
 */

let playGame = confirm("Let's play Rock, Paper, Scissors! Ready?");
if(playGame) {
    //play
    while(playGame) {
        const playersChoice = prompt("Please enter Rock, Paper, or Scissors");
        if (playersChoice || playersChoice === "") {
            const playerOne = playersChoice.trim().toLowerCase();
            if (
                playerOne === "rock" ||
                playerOne === "paper" ||
                playerOne === "scissors"
            ) {
                const computerChoice = Math.floor(Math.random() * 3);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice];

                const result = 
                playerOne === computer
                    ?`playerOne: ${playerOne}\nComputer: ${computer}\nTie Game!`
                    : playerOne === "rock" && computer === "paper"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
                    : playerOne === "paper" && computer === "scissors"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer Wins!`
                    : playerOne === "scissors" && computer === "rock"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\Computer Wins!`
                    : `playerOne: ${playerOne}\nComputer: ${computer}\playerOne Wins!`
                alert(result);
                playGame = confirm("Play Again?");
                if(!playGame) alert("Okay, thanks for playing");
                continue;
            } else {
                alert("You didn't enter rock, paper or scissors!");
                continue;
            }
        } else {
            alert("I guess you changed your mind. Maybe next time.");
            break;
        }
    }
}