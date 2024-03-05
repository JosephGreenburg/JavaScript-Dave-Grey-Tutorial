const initGame = () => {
    const startGame = confirm("Do you want to play Rock, Paper, or Scissors?");
    startGame ? playGame() : alert("Okay, Maybe next time");
};

//Game flow Function

const playGame = () => {
    while(true) {
        let playersChoice = getPlayerChoice();
        playersChoice = formatPlayerChoice(playersChoice);
        if(playersChoice === ""){
            invalidChoice();
            continue;
        }
        if(!playersChoice) {
            decidedNotToPlay();
            break;
        }
        playersChoice = evaluatePlayersChoice(playersChoice);
        if(!playersChoice) {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playersChoice, computerChoice);
        displayResult(result);
        if(askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Please enter rock, paper, or scissors");
}

const formatPlayerChoice = (playersChoice) => {
    if(playersChoice || playersChoice === "") {
        return playersChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const decidedNotToPlay = () => {
    alert("I suppose you decided not to play. Maybe next time.");
};

const evaluatePlayersChoice = (playersChoice) => {
    if(
        playersChoice === "rock" ||
        playersChoice === "paper" ||
        playersChoice === "scissors"
    ) {
        return playersChoice;
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors!");
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
};

const determineWinner = (playersChoice, computerChoice) => {
    const winner = 
    playersChoice === computerChoice
        ?`playersChoice: ${playersChoice}\nComputer: ${computerChoice}\nTie Game!`
        : playersChoice === "rock" && computerChoice === "paper"
        ? `playersChoice: ${playersChoice}\nComputer: ${computerChoice}\nComputer Wins!`
        : playersChoice === "paper" && computerChoice === "scissors"
        ? `playersChoice: ${playersChoice}\nComputer: ${computerChoice}\nComputer Wins!`
        : playersChoice === "scissors" && computerChoice === "rock"
        ? `playersChoice: ${playersChoice}\nComputer: ${computerChoice}\nComputer Wins!`
        : `playersChoice: ${playersChoice}\nComputer: ${computerChoice}\nplayersChoice Wins!`;

    return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Play again?");
}

const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
};

initGame();
