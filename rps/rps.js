let userScore = 0;
let computerScore = 0;

// Map button clicks to values
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const choices = {
  1: "Rock",
  2: "Paper",
  3: "Scissors"
};

document.getElementById("rockbtn").addEventListener("click", () => playGame(ROCK));
document.getElementById("papertbtn").addEventListener("click", () => playGame(PAPER));
document.getElementById("scissorsbtn").addEventListener("click", () => playGame(SCISSORS));

function playGame(userChoice) {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  const resultElement = document.getElementById("result");
  const userScoreElement = document.getElementById("userscore");
  const computerScoreElement = document.getElementById("cmpscores");

  let result = `You chose ${choices[userChoice]}, Computer chose ${choices[computerChoice]}. `;

  if (userChoice === computerChoice) {
    result += "It's a Draw!";
  } else if (
    (userChoice === ROCK && computerChoice === SCISSORS) ||
    (userChoice === PAPER && computerChoice === ROCK) ||
    (userChoice === SCISSORS && computerChoice === PAPER)
  ) {
    result += "You Won!";
    userScore++;
  } else {
    result += "You Lost!";
    computerScore++;
  }

  resultElement.textContent = result;
  userScoreElement.textContent = userScore;
  computerScoreElement.textContent = computerScore;
}
