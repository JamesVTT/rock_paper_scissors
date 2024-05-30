console.log("Hello World! Ready to play?");

let mainArray = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    console.log(mainArray[computerChoice]);
}

function getHumanChoice () {
    let humanChoice = prompt('Rock, Paper, or Scissors, tiny human?','');
    if (humanChoice === 'Rock' || humanChoice === 'rock' ||humanChoice === 'Paper' ||humanChoice === 'paper' ||humanChoice === 'Scissors' ||humanChoice === 'scissors') {
        console.log(humanChoice)
    } else {
        console.log('That wasn\'t a selection now was is it? Try again.')
    }
}