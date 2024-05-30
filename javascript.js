console.log("Hello World! Ready to play?");

let mainArray = ['Rock', 'Paper', 'Scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    console.log(mainArray[computerChoice]);
}

function getHumanChoice () {
    let humanChoice = prompt('Rock, Paper, or Scissors, tiny human?','').toLowerCase();
    if (humanChoice === 'rock' ||humanChoice === 'paper' ||humanChoice === 'scissors') {
        console.log(humanChoice)
    } else {
        console.log('That wasn\'t a selection now was is it? Try again.')
    }
}