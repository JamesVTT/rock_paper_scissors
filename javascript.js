console.log("Hello World! Ready to play?");

let mainArray = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;


// Function to have computer make a random selection
function getComputerChoice() {
    return mainArray[Math.floor(Math.random()*3)];
}

// Function to allow user to input their selection 
function getHumanChoice () {
    let input = prompt('Rock, Paper, or Scissors, tiny human?','').toLowerCase();
    if (input === 'rock' ||input === 'paper' ||input === 'scissors') {
        return input
    } else {
        console.log('That wasn\'t a selection now was is it? Try again.')
    }
}

// Function to play one round
function playRound(humanChoice, computerChoice) {
    console.log (humanChoice + 'This is working' + computerChoice);

}


 
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);