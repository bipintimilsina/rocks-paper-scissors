let playerWinCount = 0,
  computerWinCount = 0;
// let choices={"rock","papers","scissors"};

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
  // compuChoice = "paper";
  compuChoice = compuChoice.toLowerCase();
  console.log(`Computer Choose ${compuChoice}`);
  return compuChoice;
};
function getRandomChoice() {}

function playRound(playerSelection, computerSelection) {
  // your code here!

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
// let roundCounter = () => {
//   for (i = 1; i <= 5; i++) {
//     console.log(`Round ${i}`);
//   }
// };

let game = () => {
  console.log("lets play Five Rounds".toUpperCase());
  for (i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    let playerSelection = askPlayerSelection();

    let computerSelection = getComputerChoice();
    var delayInMilliseconds = 5000; //1 second

    // setTimeout(function () {
      //your code to be executed after 1 second
      console.log(playRound(playerSelection, computerSelection));
    // }, delayInMilliseconds);
    console.log(
      `Win Count: Player-${playerWinCount} Computer-${computerWinCount} `
    );

    console.log("\n");
  }

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
