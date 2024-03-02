//Conditionals: If Statements - Rock, Paper, Scissors.

//Decision Tree
let playerOne = 'scissors';
let computer = 'paper';

if (playerOne === computer) {
    console.log('Tie Game!');
} else if (playerOne === 'rock') {
    if(computer === 'scissors') {
        console.log(`Player wins!`)
    } else {
        console.log(`Computer wins!`)
    }
} else if (playerOne === 'scissors') {
    if(computer === 'paper') {
        console.log(`Player wins!`)
    } else {
        console.log(`Computer wins!`)
    }
} else if (playerOne === 'paper') {
    if(computer === 'rock') {
        console.log(`Player wins!`)
    } else {
        console.log(`Computer wins!`)
    }
}

