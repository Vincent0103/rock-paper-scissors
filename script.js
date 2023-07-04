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

    // print a win/lose/tie messages depending on the player's and computer's selection of rock, paper, scissors
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You Win! Rock beats Scissors";
        } else if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        }
        return "That's a tie! Rock and Rock collide";
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock!";
        } else if (computerSelection == "Scissors") {
            return "You Lose! Scissors beats Paper";
        }
        return "That's a tie! Paper and Paper collide";
    } else {
        if (computerSelection == "paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors!";
        }
        return "That's a tie! Scissors and Scissors collide";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));