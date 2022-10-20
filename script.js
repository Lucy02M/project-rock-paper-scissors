const choices = ["rock", "paper", "scissors"];

function game(){
  playRound();
}

function playRound(){
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
}

function playerChoice(){
  let input = prompt("Choose");
  input = input.toLowerCase;
  return input;
};

function computerChoice(){
  return choices[Math.floor(Math.random()*choices.length)]
};

function checkWinner(choiceP, choiceC){
  console.log(choiceP, choiceC);
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

game();
