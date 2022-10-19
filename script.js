const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
  return choices[Math.floor(Math.random()*choices.length)]
};

function getPlayerChoice(){
  const playerChoice = prompt("Choose", "");
  return playerChoice.toLowerCase;
};

function playRound(playerSelection, computerSelection){
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();

    if (computerSelection == playerSelection){
        return "Tie";
    }
    else (computerSelection != playerSelection);{
        return "We'll see"
    };
};