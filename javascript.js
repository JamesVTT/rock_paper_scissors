console.log("Hello World! Ready to play?");

let mainArray = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    console.log(mainArray[computerChoice]);
}