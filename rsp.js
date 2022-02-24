function computerPlay (){

    let rspArray = ['rock', 'paper', 'scissors'];
    const random = rspArray[~~(Math.random() * rspArray.length)];
    return random;
}

function capitalizeFirstLetter (string) {
    let firstLetter = string.charAt(0);
    let capitalLetter = firstLetter.toUpperCase();
    let lowerCaseString = string.toLowerCase();
    let newString = "";
    newString = capitalLetter + lowerCaseString.substring(1);
    return newString;

}

const playerSelection = "";
const computerSelection = computerPlay();
let playerWins = 0;
let computerWins = 0;

function playRound (playerSelection, computerSelection) {
    lowerCasePlayerSelection = playerSelection.toLowerCase();

    if (lowerCasePlayerSelection == computerSelection) {
        playerWins += 1;
        return "You tie! " + capitalizeFirstLetter(playerSelection) + " ties with " + capitalizeFirstLetter(computerSelection) + "!";
    }
    
    else if ((lowerCasePlayerSelection == "rock") && (computerSelection != "paper")) {
        playerWins += 1;
        return "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + capitalizeFirstLetter(computerSelection) + "!";

    }

    else if ((lowerCasePlayerSelection == "paper") && (computerSelection != "scissors")) {
        playerWins += 1;
        return "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + capitalizeFirstLetter(computerSelection) + "!";

    }

    else if ((lowerCasePlayerSelection == "scissors") && (computerSelection != "rock")) { 
        playerWins += 1;
        return "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + capitalizeFirstLetter(computerSelection) + "!";

    }
    
    else {
        computerWins += 1;
        return "You Lose! " + capitalizeFirstLetter(computerSelection) + " beats " + capitalizeFirstLetter(playerSelection) + "!";
    }

}

function game () {
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt("Choose your fighter!", "Rock, Paper, or Scissors?");
        const computerSelection = computerPlay();
        /*console.log("i is " + i);
        console.log("playerSelection is " + playerSelection);
        console.log("computerSelection is " + computerSelection);*/
        console.log(playRound(playerSelection, computerSelection));
    }

    return "The game is complete. " + findScore();
}


function findScore () {
    console.log("Computer: " + computerWins + ", Player: " + playerWins);
    if (computerWins > playerWins) {
        return "The computer won this round. Better luck next time!";}
    else {
        return "Congratulations, you beat the computer!"; }
    }

/*console.log(playRound(playerSelection, computerSelection));*/
console.log(game());


