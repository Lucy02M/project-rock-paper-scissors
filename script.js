const choices = ["rock", "paper", "scissors"];
const winners = [];

function game(){
  for (let i = 0; i <= 5; i++){
    playRound();
  };
  logWins();
}

function playRound(){
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
}

function playerChoice(){
  let input = prompt("Choose");
  input = input.toLowerCase();
  return input;
};

function computerChoice(){
  return choices[Math.floor(Math.random()*choices.length)]
};

function checkWinner(choiceP, choiceC){
  if (choiceP === choiceC){
    return "Tie";
}
else if ((choiceP == "rock" && choiceC == "scissors") || 
         (choiceP == "paper" && choiceC == "rock") || 
         (choiceP == "scissors" && choiceC == "paper"))
      {return "Player";}
else {
  return "Computer";
};
}

function logWins(){
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
  console.log("Results:");
  console.log("Player wins:", playerWins);
  console.log("Computer wins:", computerWins);
  console.log("Ties:", ties);
}

game();
