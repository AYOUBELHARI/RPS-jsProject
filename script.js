let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(humanChoice + " beats " + computerChoice + "!  You: " + ++humanScore + ", Computer: " + computerScore);
    } else {
        console.log(computerChoice + " beats " + humanChoice + "!  You: " + humanScore + ", Computer: " + ++computerScore);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

function displayFinalScore() {
    console.log("Final Score! " + "You: " + humanScore + ", Computer: " + computerScore);
    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer is the winner!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();
displayFinalScore();