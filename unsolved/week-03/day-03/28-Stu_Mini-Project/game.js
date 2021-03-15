// Declare global data
let userWins = 0;
let userLosses = 0;
let userTies = 0;

let playerChoice = "R";
let computerChoice;

// Prompt player for choice

// validate player choice
const validateChoice = function () {
  switch (playerChoice) {
    case "R":
      return true;
    case "P":
      return true;
    case "S":
      return true;
  }
};
// randomly generate computer choice
const randomChoiceGenerator = function () {
  const validChoices = ["R", "P", "S"];
  const randomIndex = Math.floor(Math.random() * 3);
  const randomChoice = validChoices[randomIndex];
  return randomChoice;
};

// apply game logic to check who wins

// update scores of winner/loser

// display scores
const displayScores = function () {
  const result = {
    wins: userWins,
    losses: userLosses,
    ties: userTies,
  };
  console.table(result);
};

// present confirm option to play again
// TODO remove
playerChoice = prompt("Please enter your choice (R, P, or S):");

if (validateChoice()) {
  computerChoice = randomChoiceGenerator();
  console.log(playerChoice);
  console.log(computerChoice);
} else {
  alert("Please choose from the valid options: R, P, S");
}
