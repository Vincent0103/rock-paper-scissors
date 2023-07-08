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
    let scores = [0, 0];
    const numberOfRounds = 5;
    const btns = document.querySelectorAll(".rps-btn");
    const tryAgainBtn = document.querySelector(".try-again-btn");

    // get the paragraph to put the final result of the rps game
    const gameResultMessage = document.querySelector(".result-message");

    const displayScore = document.querySelector(".score");
    let btnClickable = true;

    btns.forEach(btn => btn.addEventListener("click", () => {
        if (btnClickable) {
            // get the paragraph to display the result of the current round
            const roundResultMessage = document.querySelector(".result-message");

            // get the current result from the rps round
            const currentResultMessage = playRound(btn.textContent, getComputerChoice());

            // check if the result message contains win or lose to attribute a point to one of the player
            if (currentResultMessage.toLowerCase().includes("win")) scores[0] += 1;
            else if (currentResultMessage.toLowerCase().includes("lose")) scores[1] += 1;

            for (let i = 0; i < scores.length; i++) {
                // check if the one of the players went to 5 points and finish the game
                if (scores[i] === 5) {
                    btnClickable = false;

                    tryAgainBtn.classList.remove("inactive");
                    tryAgainBtn.classList.add("active");

                    if (scores[0] === 5) {
                        gameResultMessage.textContent = "You win the game!";
                        break;

                    } else if (scores[1] === 5) {
                        gameResultMessage.textContent = "You lose! Try again later";
                        break;
                    }

                } else {
                    roundResultMessage.textContent = currentResultMessage;
                }
            }

            displayScore.textContent = scores[0] + " - " + scores[1];
        }
    }))

    // try again button shows up when game's finished and onclick restarts the game
    tryAgainBtn.addEventListener("click", () => {
        if (tryAgainBtn.classList.contains("active")) {
            tryAgainBtn.classList.remove("active");
            tryAgainBtn.classList.add("inactive");
            gameResultMessage.textContent = "";
            displayScore.textContent = "";
            game();
        }
    })
}

window.addEventListener("DOMContentLoaded", () => {
    game();
})

