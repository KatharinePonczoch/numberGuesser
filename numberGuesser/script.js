let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//random integer between 0-9
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(num1, num2) {
  return Math.abs(num1 - num2);
}

/*when I added the getAbsoluteDistance function, the score started incrementing by 2, like its being called twice. can't figure out why??*/

function compareGuesses(humanGuess, computerGuess, target) {
  if (humanGuess > 9) {
    alert("Guess is out of target range");
  }
  var humanDifference = getAbsoluteDistance(humanGuess, target);
  var computerDifference = getAbsoluteDistance(computerGuess, target);
  if (humanDifference <= computerDifference) {
    updateScore("human");
    return true;
  } else updateScore("computer");
  return false;
}
function updateScore(winner) {
  if (winner === "human") {
    humanScore = humanScore + 1;
  } else if (winner === "computer") {
    computerScore = computerScore + 1;
  }
}

function advanceRound() {
  currentRoundNumber = currentRoundNumber + 1;
}
