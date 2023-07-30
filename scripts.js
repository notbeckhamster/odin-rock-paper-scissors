

function getComputerChoice(){
    let choice = Math.floor(Math.random() *3);
    let array = ["rock", "paper", "scissors"];
    return array[choice];

}

function playRound(playerSelection, computerSelection){
    //Lowercase both
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //Check for draw 
    if (playerSelection === computerSelection) return [0, "Draw!"];
    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            return [-1,"You Lose! Paper beats Rock"];
        } else{
            return [1, "You Win! Rock beats Scissors"];
        }

    } else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            return [-1, "You Lose! Scissors beats Paper"];
        } else{
            return [1, "You Win! Paper beats Rock"];
        }
    } else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            return [-1, "You Lose! Rock beats Scissors"];
        } else{
            return [1, "You Win! Scissors beats Paper"];
        }
    } 

}
function game(){
    let score = 0;
    for (let idx = 0; idx<5; idx++){
        var playerSelection = prompt("Choose Rock, Paper or Scissors");
        let computerSelection = getComputerChoice();
        let array = playRound(playerSelection, computerSelection);
        score += array[0];
        console.log(array[1]);

    }
    if (score===0) return "Draw";
    if (score > 0) return "You Win";
    if (score < 0) return "You Lose";

}

console.log(game());