//checking to make sure file is connected
console.log("Hello World");

//defining global variables
let state = { userCanSelect: true };

let rockBtn = document.querySelector(".rock-button");
let paperBtn = document.querySelector(".paper-button");
let scissorsBtn = document.querySelector(".scissors-button");
let playAgainBtn = document.querySelector(".play-button");

let opponentText = document.getElementById("computer-choice-text");
let winnerText = document.getElementById("winner-text");
let playerText = document.getElementById("player-text");

let computerChoice = "";

//function to calculate computer choice
function getComputerChoice() {
  let computerChoiceInt = Math.floor(Math.random() * 3);
  let opponentChoice = "";

  switch (computerChoiceInt) {
    case 0:
      opponentChoice = "Rock";
      break;

    case 1:
      opponentChoice = "Paper";
      break;

    case 2:
      opponentChoice = "Scissors";
      break;
    default:
      console.log("Random number isn't working");
  }
  return opponentChoice;
}

//calculate who wins if user clicks rock
function rockChosen(e) {
  if (!state.userCanSelect) {
    return;
  }

  state.userCanSelect = false;

  computerChoice = getComputerChoice();
  playerText.textContent = "Player chose Rock";
  if (computerChoice === "Rock") {
    opponentText.textContent = "Opponent chose Rock";
    winnerText.textContent = "It's a tie!";
  }

  if (computerChoice === "Paper") {
    opponentText.textContent = "Opponent chose Paper";
    winnerText.textContent = "Opponent wins!";
  }

  if (computerChoice === "Scissors") {
    opponentText.textContent = "Opponent chose Scissors";
    winnerText.innerHTML = "You win!!! &#128513";
  }
}

//calculate who wins if user clicks paper
function paperChosen(e) {
  if (!state.userCanSelect) {
    return;
  }
  state.userCanSelect = false;
  playerText.textContent = "Player chose Paper";
  computerChoice = getComputerChoice();
  if (computerChoice === "Rock") {
    opponentText.textContent = "Opponent chose Rock";
    winnerText.innerHTML = "You win!!! &#128513";
  }

  if (computerChoice === "Paper") {
    opponentText.textContent = "Opponent chose Paper";
    winnerText.textContent = "It's a tie!";
  }

  if (computerChoice === "Scissors") {
    opponentText.textContent = "Opponent chose Scissors";
    winnerText.textContent = "Opponent wins!";
  }
}

//calculate who wins if user clicks scissors
function scissorsChosen(e) {
  if (!state.userCanSelect) {
    return;
  }
  state.userCanSelect = false;

  playerText.textContent = "Player chose Scissors";
  computerChoice = getComputerChoice();
  if (computerChoice === "Rock") {
    opponentText.textContent = "Opponent chose Rock";
    winnerText.textContent = "Opponent wins!";
  }

  if (computerChoice === "Paper") {
    opponentText.textContent = "Opponent chose Paper";
    winnerText.textContent = "You win!!!";
    winnerText.innerHTML = "You win!!! &#128513";
  }

  if (computerChoice === "Scissors") {
    opponentText.textContent = "Opponent chose Scissors";
    winnerText.textContent = "It's a tie!";
  }
}

//reset game
function playAgainBtnPushed() {
  state.userCanSelect = true;
  playerText.textContent = "Can";
  opponentText.textContent = "You";
  winnerText.textContent = "Win?";
}

//event listeners for each button

rockBtn.addEventListener("click", rockChosen);
paperBtn.addEventListener("click", paperChosen);
scissorsBtn.addEventListener("click", scissorsChosen);
playAgainBtn.addEventListener("click", playAgainBtnPushed);
