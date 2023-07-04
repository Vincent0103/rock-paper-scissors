// Get computer's choice between rock, paper and scissors
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    // get a random number from 0 to 2 corresponding to one of the choices array indexes
    let getRandomNum = Math.floor(Math.random() * 3);

    // return a choice from choices by using a random index from the getRandomNum variable
    return choices[getRandomNum];
}

// make a round of the rock, paper, scissors game
function playRound(playerSelection, computerSelection) {

    // Convert player's and computer's selection strings to lower case
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase();

    // print a win/lose/tie message depending on the player's and computer's selection of rock, paper, scissors
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You Win! Rock beats Scissors";
        } else if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        }
        return "That's a Tie! Rock and Rock collide";
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock!";
        } else if (computerSelection == "Scissors") {
            return "You Lose! Scissors beats Paper";
        }
        return "That's a Tie! Paper and Paper collide";
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors!";
        }
        return "That's a Tie! Scissors and Scissors collide";
    } else {
        return "Stop playing moves that don't exist in the game 😹🙏";
    }
}

// initialize a rock, paper, scissors game
function game() {
    // initialize scores in a form of an array
    let scores = [0, 0];

    // make a game of five rounds of rock, paper, scissors
    for (let i = 0; i < 5; i++) {
        // asks the user to choose beween rock, paper and scissors
        let playerSelection = prompt("Let's go! Choose between Rock, Paper, Scissors");

        // get computer's choice between rock, paper and scissors
        let computerSelection = getComputerChoice();

        // get result of the current round
        let result = playRound(playerSelection, computerSelection);

        // update scores based on which player win/lose or if it's a tie
        if (result.includes("Win")) {
            ++scores[0];
        } else if (result.includes("Lose")) {
            ++scores[1];
        } else if (result.includes("Tie")) {
            ++scores[0] && ++scores[1];
        }

        // print a win/lose/tie message based on the game's result and show current scores
        console.log(result);
        console.log(`The score is ${scores[0]}-${scores[1]}`);
    }
}

game();
