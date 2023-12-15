// ui code


const rock= document.getElementById("rock")
const paper= document.getElementById("paper")
const scissors= document.getElementById("scissors")


rock.addEventListener("click",playRound,false)
paper.addEventListener("click",playRound,false)
scissors.addEventListener("click",playRound,false)



const score=document.getElementById("scoreCard")
score.lastChild.textContent="hey"
console.log(score.lastChild)

































let playerWinCount = 0,
  computerWinCount = 0;

let getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      compuChoice = "ROCK";
      break;
    case 1:
      compuChoice = "PAPER";
      break;
    case 2:
      compuChoice = "SCISSORS";
      break;
  }
  compuChoice = compuChoice.toLowerCase();
  console.log(`Computer Choose ${compuChoice}`);
  return compuChoice;
};
// function getRandomChoice() {}

//function for 1 round game
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "::::Tie:::";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerWinCount++;
    return "You win: scissors Cuts Paper";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerWinCount++;
    return "You lose: scissors cuts paper";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerWinCount++;

    return "You win: Rock beats scissors";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerWinCount++;

    return "You lose: Rock beats scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerWinCount++;

    return "You win : Paper beats rock ";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerWinCount++;
    return "You lose: Paper beats Rock";
  }
}

//function for more than one round game and score Card
let game = () => {
  console.log("lets play Five Rounds".toUpperCase());
  for (i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    let playerSelection = askPlayerSelection();

    let computerSelection = getComputerChoice();

    score.lastChild=playRound(playerSelection,computerSelection)

    console.log(playRound(playerSelection, computerSelection));
    console.log(
      `Win Count: Player-${playerWinCount} Computer-${computerWinCount} `
    );

    console.log("\n");
  }
  //its for checking who won
  playerWinCount > computerWinCount
    ? console.log(`congrats! You win`.toUpperCase())
    : playerWinCount < computerWinCount
    ? console.log(`You lose Dummy`.toUpperCase())
    : console.log("Well its a Tie , Go Home ");
};
game();

function askPlayerSelection() {
  let ourSelection = prompt('Enter your choice "Rock :Paper :scissors', "rock");
  ourSelection = ourSelection.toLowerCase();
  console.log(`Player Selected ${ourSelection}`);
  
  return ourSelection;
}



