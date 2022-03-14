/*let button = document.querySelector('#button');

button.addEventListener('click', (e)=> {
    console.log(e.target.id);
})*/




let playerSelection = "";

function select(choice) {

    if (choice == 'rock') {
        playerSelection = "rock";
        return "rock";
    }
    if (choice == 'paper') {
        playerSelection = "paper";
        return "paper";
    }
    if (choice == 'scissors') {
        playerSelection = "scissors";
        return "scissors";
    }
}

function computerPlay () {

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

/*const computerSelection = computerPlay();*/
let playerWins = 0;
let computerWins = 0;
let currentWinnerScore = 0;
let startRoundUpdate = ""
let endRoundUpdate = "";

function playRound (playerSelection, computerSelection) {

    endRoundUpdate = "";

    console.log(computerWins + playerWins + " within playRound");

    if (currentWinnerScore == 5) {
        displayWinner();
        return;
    }

   /* playerSelection = select(choice);*/
    lowerCasePlayerSelection = playerSelection.toLowerCase();

    startRoundUpdate = "";
    startRoundUpdate += "The computer chose " + computerSelection + ". You chose " + playerSelection + ".";

    if (lowerCasePlayerSelection == computerSelection) {
        currentWinnerScore = playerWins;
        endRoundUpdate = "You tie! " + capitalizeFirstLetter(playerSelection) + " ties with " + capitalizeFirstLetter(computerSelection) + "!";
    }
    
    else if ((lowerCasePlayerSelection == "rock") && (computerSelection != "paper")) {
        playerWins += 1;
        currentWinnerScore = playerWins;

        endRoundUpdate += "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + capitalizeFirstLetter(computerSelection) + "!";

    }

    else if ((lowerCasePlayerSelection == "paper") && (computerSelection != "scissors")) {
        playerWins += 1;
        currentWinnerScore = playerWins;
        endRoundUpdate += "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + capitalizeFirstLetter(computerSelection) + "!";

    }

    else if ((lowerCasePlayerSelection == "scissors") && (computerSelection != "rock")) { 
        playerWins += 1;

        currentWinnerScore = playerWins;
        endRoundUpdate += "You win! " + capitalizeFirstLetter(playerSelection) + " beats " + capitalizeFirstLetter(computerSelection) + "!";

    }
    
    else {
        computerWins += 1;
        currentWinnerScore = computerWins;
        endRoundUpdate += "You Lose! " + capitalizeFirstLetter(computerSelection) + " beats " + capitalizeFirstLetter(playerSelection) + "!";
    }


    calculateScore();

    return;


}

/*function endGame () {
    for (let i = 0; i < 50; i++) {

    }

    return "The game is complete. " + displayWinner();
}*/


function displayWinner () {
    
    console.log(computerWins + playerWins + " within PlayerWins");

    if ((computerWins > playerWins) && (computerWins >= 5)) {
        console.log ("GAME OVER! The computer won this round. Better luck next time!");
        return "GAME OVER! The computer won this round. Better luck next time!";
    }
    else if ((playerWins > computerWins) && (playerWins >= 5)) {
        console.log("GAME OVER! Congratulations, you beat the computer!"); 
        return "GAME OVER! Congratulations, you beat the computer!";
    }

    else return "Final Winner";

       
}






    function calculateScore () {


        document.getElementsByClassName('score')[0].innerHTML = "Computer Score: " + computerWins;

        document.getElementsByClassName('score')[1].innerHTML = "Player Score: " + playerWins;

        document.getElementsByClassName('update')[0].innerHTML = startRoundUpdate;

        document.getElementsByClassName('update')[1].innerHTML = endRoundUpdate;

        document.getElementsByClassName('update')[2].innerHTML = displayWinner();




    }

/*begin manipulating dom elements here*/


/*console.log(playRound(playerSelection, computerSelection));
console.log(game());


document.getElementById(playRound(select(choice)).onclick = playRound();*/

