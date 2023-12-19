const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const outcome = document.querySelector(".outcome");
const EndingScore = document.querySelector(".ending-score");

const currentScoreIs = document.querySelector(".current-score");
let playerWinCount = 0,
computerWinCount = 0;

// currentScore(playerWinCount, computerWinCount);
// function getRandomChoice() {}

//function for 1 round game
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    const p = document.createElement("p");

    p.innerText = "YOU TIED";
    p.classList.add("alert", "alert-success","text-center","w-75","mx-auto");
    outcome.appendChild(p);

    // return "::::Tie:::";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerWinCount++;

    const p = document.createElement("p");

    p.innerText = "You Win scissors✌️ Cuts Paper🤚";
    p.classList.add("alert", "alert-success","text-center","w-75","mx-auto");

    outcome.appendChild(p);

    // return "You win: scissors Cuts Paper";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerWinCount++;
    const p = document.createElement("p");
    p.innerText = "You Lose Scissors✌️ cuts paper🤚";
    p.classList.add("alert", "alert-success","text-center","w-75","mx-auto");

    outcome.appendChild(p);

    // return "You lose: scissors cuts paper";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerWinCount++;
    const p = document.createElement("p");
    p.innerText = "You Win Rock✊ beats scissors✌️";
    p.classList.add("alert", "alert-success","text-center","w-75","mx-auto");

    outcome.appendChild(p);

    // return "You win: Rock beats scissors";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerWinCount++;
    const p = document.createElement("p");
    p.innerText = "You Lose Rock✌️ beats Scissors✌️";
    p.classList.add("alert", "alert-success","text-center","w-75","mx-auto");

    outcome.appendChild(p);

    // return "You lose: Rock beats scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerWinCount++;

    const p = document.createElement("p");
    p.innerText = "You win Paper🤚 beats Rock✌️";

    p.classList.add("alert", "alert-success","text-center","w-75","mx-auto");

    outcome.appendChild(p);

    // return "You win : Paper beats rock ";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerWinCount++;

    const p = document.createElement("p");
    p.innerText = "You lose Paper🤚 beats Rock✊";
    p.classList.add("alert", "alert-success","text-center","w-75","mx-auto");

    outcome.appendChild(p);

    // return "You lose: Paper beats Rock";
  }
  // outcome.appendChild(p);
}

//event listeners

rock.addEventListener(
  "click",
  () => {
    removeOutcome()
    currentScore(playerWinCount, computerWinCount);
    removeScore(playerWinCount, computerWinCount);
    const playerSelection = "rock";
    const p = document.createElement("p");
    p.innerText = "You Choose ROCK ✊";
    p.classList.add("alert", "alert-info", "mt-5","text-start","w-75","mx-auto");

    outcome.appendChild(p);

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkForWinner(playerWinCount, computerWinCount);
    addMargin();
    currentScore(playerWinCount, computerWinCount);
  },

  false
);
paper.addEventListener(
  "click",
  () => {

    removeOutcome()
    currentScore(playerWinCount, computerWinCount);
    removeScore(playerWinCount, computerWinCount);
    const playerSelection = "paper";
    const p = document.createElement("p");
    p.innerText = "Player choose PAPER 🤚";
    p.classList.add("alert", "alert-info", "mt-5","w-75","mx-auto");

    outcome.appendChild(p);
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    checkForWinner(playerWinCount, computerWinCount);
    addMargin();
    currentScore(playerWinCount, computerWinCount);
  },

  false
);

scissors.addEventListener(
  "click",
  () => {    removeOutcome()

    currentScore(playerWinCount, computerWinCount);
    removeScore(playerWinCount, computerWinCount);
    const playerSelection = "scissors";

    const p = document.createElement("p");
    p.innerText = "You choose SCISSORS✌️";
    p.classList.add("alert", "alert-info", "mt-5","w-75","mx-auto");
    outcome.appendChild(p);

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    checkForWinner(playerWinCount, computerWinCount);
    addMargin();
    currentScore(playerWinCount, computerWinCount);
  },

  false
);

// currentScore(playerWinCount,computerWinCount)




let removeOutcome = () => {
  // Get the list of child nodes
  const children = outcome.children;

  // Check if there are at least two children
  while (children.length > 1) {
    // Remove the second child (index 1) `repeatedly`
    outcome.removeChild(children[0]);
  }
};







let addMargin = () => {
  const p = document.createElement("p");
  p.classList.add("h-100", "p-6");
  outcome.appendChild(p);
};

const checkForWinner = (playerScore, computerScore) => {
  if (playerScore === 5) {
    const h2 = document.createElement("h2");
    h2.innerText = `You won ${playerScore} to ${computerScore}  Great Job winning the computer`;
    h2.classList.add("alert", "alert-success","text-center");
    EndingScore.appendChild(h2);
  }
  if (computerScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("alert", "alert-danger","text-center");

    h2.innerText = `You lost by  ${playerScore} to ${computerScore}`;
    EndingScore.appendChild(h2);
  }
};

//for the current scoring thing
let currentScore = (playerWinCount, computerWinCount) => {
  const p = document.createElement("p");
  p.innerText = `You-${playerWinCount} Computer-${computerWinCount}`;
  p.classList.add(
    "d-flex",
    "justify-content-center",
    "p-3",
    "bg-dark",
    "text-white",
    "w-25",
    "mx-auto",
    "rounded-circle"
  );

  currentScoreIs.appendChild(p);
};

currentScore(playerWinCount, computerWinCount);



let removeScore = (playerWinCount, computerWinCount) => {
  // const list = document.getElementById("myList");
  // currentScoreIs.removeChild(currentScoreIs.firstElementChild);
  while (currentScoreIs.hasChildNodes()) {
    currentScoreIs.removeChild(currentScoreIs.firstChild);
  }
};

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

  const p = document.createElement("p");
  emoji=EmojiComputer(compuChoice)
  p.innerText = `Computer Chooses ${compuChoice} ${emoji}`;
  p.classList.add("alert", "alert-danger","text-end","w-75","mx-auto");
  outcome.appendChild(p);

  return compuChoice;
};

let EmojiComputer = (computChoice) => {
  return compuChoice == "rock"
    ? "✊"
    : compuChoice == "paper"
    ? "🤚"
    : compuChoice == "scissors"
    ?  "✌️"
    : null;
};

//function for more than one round game and score Card
// let game = () => {
//   console.log("lets play Five Rounds".toUpperCase());
//   // for (i = 1; i <= 5; i++) {
//   //   console.log(`Round ${i}`);

//   //   let playerSelection = askPlayerSelection();

//   //   let computerSelection = getComputerChoice();

//   //   score.lastChild.textContent = playRound(playerSelection, computerSelection);

//   //   // console.log(playRound(playerSelection, computerSelection));
//   //   displayResult.lastChild.textContent = `Win Count: Player-${playerWinCount} Computer-${computerWinCountf}`;
//   // }
//   //for ui checking who won
//   playerWinCount > computerWinCount
//     ? (finalScore.firstChild.textContent = "Congrats You win".toUpperCase())
//     : playerWinCount < computerWinCount
//     ? (finalScore.firstChild.textContent = "You lose Dummy".toUpperCase())
//     : (finalScore.firstChild.textContent = "Well its a Tie, Go Home");
// };
// game();

// function askPlayerSelection(playerSelection) {
//   // let ourSelection = prompt('Enter your choice "Rock :Paper :scissors', "rock");

//   let isSelected = playerSelection;

//   // ourSelection = ourSelection.toLowerCase();
//   buttonContain.nextSibling.innerText = `Player Selected ${isSelected}`;

//   console.log(`Player Selected ${isSelected}`);

//   return isSelected;
// }
