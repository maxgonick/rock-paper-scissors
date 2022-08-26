const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return CHOICES[randomChoiceIndex()];
}

function randomChoiceIndex(){
    return Math.floor(Math.random() * 4);
}

function playerInput(){
    while (true) {
    const input = prompt("Please enter your selection (Rock, Paper, Scissors");
    if(typeof input == 'string'){
        return input.toLowerCase();
        }
    else{
        console.log("Please enter a valid input");
    }
    }
}

function playRound(playerSelection, computerSelection){
    //Case of Tie
    if(playerSelection === computerSelection){
        console.log(`You Tied! ${playerSelection} is the same as ${computerSelection}`);
    }
    else if(playerSelection == 'rock'){
        switch(computerSelection){
            case 'paper':
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                return false;
            case 'scissors':
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                return true;
        }
    }
    else if(playerSelection == 'paper'){
        switch(computerSelection){
            case 'scissors':
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                return false;
            case 'rock':
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                return true;
        }
    }
    else if(playerSelection == 'scissors'){
        switch(computerSelection){
            case 'rock':
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                return false;
            case 'paper':
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                return true;
        }
    }
    return `Welp, something went wrong!`;
}

function game(){
    let playerWin = 0;
    let computerWin = 0;
    for(let i = 0; i < 5; i++){
        if((playRound(playerInput(), getComputerChoice())) == false){
            computerWin++;
        }
        else{
            playerWin++
        }
    }
    if(playerWin > computerWin){
        console.log("Player Wins!");
    }
    else{
        console.log("Computer Wins!");
    }
}