let name = prompt("Hi there! What's your name", ' ');
console.log(`Hello ${name}! Ready to play?`)
console.log('You will have 5 rounds. The one with the most points wins');
console.log("To play type playGame(); and press Enter ");

let mainArray = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let round = 0;

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
    if (humanChoice !== undefined) {
        if (humanChoice === computerChoice) {
            console.log ('Draw')
        } else if (humanChoice !== computerChoice) {
            if (humanChoice == 'rock' && computerChoice == 'paper') {
                console.log('You Lose! Your rock has been covered up by the paper, bummer.')
                computerScore++; 
            } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
                console.log('You Win! Smashing success!')
                humanScore++;
            } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
                console.log('You Lose! Your paper has been cut to pieces by the scissors, bummer.')
                computerScore++;
            } else if (humanChoice == 'paper' && computerChoice == 'rock') {
                console.log('You Win! This is something to write home about!')
                humanScore++;
            } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
                console.log('You Lose! Your scissors have been pulverized by the rock, bummer.')
                computerScore++;
            }else if (humanChoice == 'scissors' && computerChoice == 'paper') {
                console.log('You Win! You cut your way through the competition.')
                humanScore++;
            }
        }
    }  
console.log('You have ' + humanScore + ' points');
console.log('The computer has ' + computerScore + ' points');
console.log('');
    if (round == 4) {
        if (humanScore > computerScore) {
            console.log('Congratulations you win! You beat the computer by' (humanScore-computerScore))
        } else {
            console.log('Welp you lost by ' + (computerScore-humanScore));
        }
        console.log('Game Over!')
    }
}

//function to play a game of 5 rounds. 
function playGame() {
      
    for (round = 0; round < 5; round++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}