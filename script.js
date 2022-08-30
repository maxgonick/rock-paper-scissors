//magic numbers
const CHOICES = ["rock", "paper", "scissors"];
const LOSE = 0;
const WIN = 1;
const TIE = 2;

function getComputerChoice() {
  return CHOICES[randomChoiceIndex()];
}

function randomChoiceIndex() {
  return Math.floor(Math.random() * 3);
}

function playerInput() {
  while (true) {
    const input = prompt("Please enter your selection (Rock, Paper, Scissors");
    if (typeof input == "string") {
      return input.toLowerCase();
    } else {
      console.log("Please enter a valid input");
    }
  }
}

function playRound(playerSelection, computerSelection) {
  //Case of Tie
  if (playerSelection === computerSelection) {
    console.log(
      `You Tied! ${playerSelection} is the same as ${computerSelection}`
    );
    return TIE;
  } else if (playerSelection == "rock") {
    switch (computerSelection) {
      case "paper":
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return LOSE;
      case "scissors":
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return WIN;
    }
  } else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "scissors":
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return LOSE;
      case "rock":
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return WIN;
    }
  } else if (playerSelection == "scissors") {
    switch (computerSelection) {
      case "rock":
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return LOSE;
      case "paper":
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return WIN;
    }
  }
  return null;
}

function game(input) {
  const state = playRound(input, getComputerChoice());
  switch (state) {
    case WIN:
      return WIN;
    case LOSE:
      return LOSE;
    case TIE:
      return TIE;
  }

  //Logic for 5 game set
  // let playerWin = 0;
  // let computerWin = 0;
  // for (let i = 0; i < 5; i++) {
  //   if (playRound(playerInput(), getComputerChoice()) == false) {
  //     computerWin++;
  //   } else {
  //     playerWin++;
  //   }
  // }
  // if (playerWin > computerWin) {
  //   console.log("Player Wins!");
  // } else {
  //   console.log("Computer Wins!");
  // }
}

function buttonGame(event) {
  const state = game(event.target.id);
  switch (state) {
    case WIN:
      tallyPlayer();
      console.log("win");
      break;
    case LOSE:
      tallyComputer();
      console.log("lose");
      break;
    case TIE:
      tallyTie();
      console.log("tie");
      break;
  }
}

function tallyPlayer() {
  const playerDivContent = document.querySelector(".player-container");
  var number = parseInt(playerDivContent.textContent, 10) + 1;
  playerDivContent.textContent = number + " Player Wins";
  //Check for end
  if (
    number >= 5 &&
    number >
      parseInt(document.querySelector(".computer-container").textContent, 10)
  ) {
    document.querySelector(".winner").textContent = "Player Wins!;";
  }
}

function tallyComputer() {
  const computerDivContent = document.querySelector(".computer-container");
  var number = parseInt(computerDivContent.textContent, 10) + 1;
  computerDivContent.textContent = number + " Computer Wins";
  if (
    number >= 5 &&
    number >
      parseInt(document.querySelector(".player-container").textContent, 10)
  ) {
    document.querySelector(".winner").textContent = "Computer Wins!";
  }
}

function tallyTie() {
  const tieDivContent = document.querySelector(".tie-container");
  var number = parseInt(tieDivContent.textContent, 10) + 1;
  tieDivContent.textContent = number + " Ties";
}

//JS logic for Rock Paper Scissors buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
  element.addEventListener("click", buttonGame);
});

//JS logic for reset button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", (event) => {
  //Clearing out previous results
  document.querySelector(".player-container").textContent = "0 Player Wins";
  document.querySelector(".computer-container").textContent = "0 Computer Wins";
  document.querySelector(".tie-container").textContent = "0 Ties";
  document.querySelector(".winner").textContent = "Undecided";
});
