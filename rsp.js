/*let button = document.querySelector('#button');

button.addEventListener('click', (e)=> {
    console.log(e.target.id);
})*/

let playerWins = 0;
let computerWins = 0;
let currentWinnerScore = 0;
let startRoundUpdate = ""
let endRoundUpdate = "";
let playerSelection = "";

function computerPlay () {

    let rspArray = ['Rock', 'Paper', 'Scissors'];
    const random = rspArray[~~(Math.random() * rspArray.length)];
    return random;
}

/*
document.onload = function() {


function computerPlay () {

    let rspArray = ['rock', 'paper', 'scissors'];
    const random = rspArray[~~(Math.random() * rspArray.length)];
    return random;
}

/*const computerSelection = computerPlay();


function playRound (playerSelection, computerSelection) {

    endRoundUpdate = "";

    console.log(computerWins + playerWins + " within playRound");

    if (currentWinnerScore == 5) {
        displayWinner();
        return;
    }

   /* playerSelection = select(choice);
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


    /*calculateScore();

    return;


}
*/



function displayWinner () {
    
    if ((computerWins > playerWins) && (computerWins >= 5)) {
        console.log ("GAME OVER! The computer won this round. Better luck next time!");
        return "GAME OVER! The computer won this round. Better luck next time!";
    }
    else if ((playerWins > computerWins) && (playerWins >= 5)) {
        console.log("GAME OVER! Congratulations, you beat the computer!"); 
        return "GAME OVER! Congratulations, you beat the computer!";
    }

    else return "Keep playing...";

       
}

 



/*begin manipulating dom elements here*/


const container = document.querySelector('#container');
container.setAttribute("style", "height: 100%; margin: 0; display: flex;  background: #ffc0cb; justify-content: center; flex-direction: column; flex: 1;")

const title = document.createElement('div');
container.classList.add('title');
container.appendChild(title);
title.textContent = "Sarah's Rock, Paper, Scissors Throwdown";
title.setAttribute("style", "background-color: red; display: flex; justify-content: center; align-items: center; font-weight: extra bold; font-size: 32px; border: 5px;");

const buttons = document.createElement('buttons');
container.classList.add('buttons');
container.appendChild(buttons);
buttons.setAttribute("style", "justify-content: space-between; display: flex; margin: 16px; padding: 16px;");

let rock = document.createElement("button");
rock.textContent = "Rock";
buttons.classList.add("rock");
rock.setAttribute("style", "text: black; background: white;");
buttons.appendChild(rock);
rock.addEventListener("click", function playRoundRock() {

        endRoundUpdate = "";
        computerSelection = computerPlay();
    
        if (currentWinnerScore == 5) {
            displayWinner();
            return;
        }
    
        startRoundUpdate = "";
        startRoundUpdate += "The computer chose " + computerSelection + ". You chose rock.";
    
        if (computerSelection == "Rock") {
            currentWinnerScore = playerWins;
            endRoundUpdate = "You tie! Rock ties with rock!";
        }
        
        else if (computerSelection != "Paper") {
            playerWins += 1;
            currentWinnerScore = playerWins;
    
            endRoundUpdate += "You win! Rock beats " + computerSelection + "!";
    
        }
    
        else {
            computerWins += 1;
            currentWinnerScore = computerWins;
            endRoundUpdate += "Computer win! " + computerSelection + "beats rock!";
    
        }
    
        calculateScore();
    
        return;

    
    })
    

let paper = document.createElement("button");
buttons.classList.add("paper");
paper.textContent = "Paper";
paper.setAttribute("style", "text: black; background: white; margin: 16x;");
/*paper.onclick = playRound(select('paper'), computerPlay()); */
buttons.appendChild(paper);
paper.addEventListener("click", function playRoundPaper() {

    endRoundUpdate = "";
    computerSelection = computerPlay();
    console.log(computerWins + playerWins + " within playRound");

    if (currentWinnerScore == 5) {
        displayWinner();
        return;
    }

    startRoundUpdate = "";
    startRoundUpdate += "The computer chose " + computerSelection + ". You chose paper.";

    if (computerSelection == "Paper") {
        currentWinnerScore = playerWins;
        endRoundUpdate = "You tie! Paper ties with paper!";
    }
    
    else if (computerSelection != "Scissors") {
        playerWins += 1;
        currentWinnerScore = playerWins;

        endRoundUpdate += "You win! Paper beats " + computerSelection + "!";

    }

    else {
        computerWins += 1;
        currentWinnerScore = computerWins;
        endRoundUpdate += "Computer wins! " + computerSelection + "beats paper!";

    }

    calculateScore();

    return;


})


let scissors = document.createElement("button");
buttons.classList.add("scissors");
scissors.textContent = "Scissors";
scissors.setAttribute("style", "text: black; background: white;");
/*scissors.onclick = playRound(select('scissors'), computerPlay()); */
buttons.appendChild(scissors);
scissors.addEventListener("click", function playRoundScissors() {

    endRoundUpdate = "";
    computerSelection = computerPlay();
    console.log(computerWins + playerWins + " within playRound");

    if (currentWinnerScore == 5) {
        displayWinner();
        return;
    }

    startRoundUpdate = "";
    startRoundUpdate += "The computer chose " + computerSelection + ". You chose rock.";

    if (computerSelection == "Scissors") {
        currentWinnerScore = playerWins;
        endRoundUpdate = "You tie! Rock ties with rock!";
    }
    
    else if (computerSelection != "Rock") {
        playerWins += 1;
        currentWinnerScore = playerWins;

        endRoundUpdate += "You win! Scissors beats " + computerSelection + "!";

    }

    else {
        computerWins += 1;
        currentWinnerScore = computerWins;
        endRoundUpdate += "Computer wins! " + computerSelection + "beats scissors!";

    }

   calculateScore();

    return;


})


const scoreboard = document.createElement('div');
container.classList.add('scoreboard');
scoreboard.setAttribute("style", "background: orange; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 16px;");
scoreboard.textContent = "Check your current status!";
container.appendChild(scoreboard);

const scores = document.createElement('div');
scoreboard.classList.add('scores');
scores.setAttribute("style", "display: flex; justify-content: center;");
scoreboard.appendChild(scores);

let compScore = document.createElement('p');
scores.classList.add('compScore');
compScore.setAttribute("style", "background: pink; display: flex; justify-content: center; margin: 16px;");
compScore.textContent = "Computer Score: " + computerWins;
scores.appendChild(compScore);

let myScore = document.createElement('p');
scores.classList.add('myScore');
myScore.textContent = "Your Score: " + playerWins;
myScore.setAttribute("style", "background: green; display: flex; justify-content: center;");
scores.appendChild(myScore);

const winnerDisplayContainer = document.createElement('div');
scoreboard.classList.add('winnerDisplayContainer');
winnerDisplayContainer.setAttribute("style", "background: red; padding: 5x; border: 6px black solid; ");
scoreboard.appendChild(winnerDisplayContainer);

const winnerDisplay = document.createElement('p');
winnerDisplayContainer.classList.add("winnerDisplay");
winnerDisplay.textContent = "Pick a player!";
winnerDisplay.setAttribute("style", "padding: 6px;")
winnerDisplayContainer.appendChild(winnerDisplay);

function calculateScore () {
        
    compScore.textContent = "Computer Score: " + computerWins;
    myScore.textContent = "Player Score: " + playerWins;
    winnerDisplay.textContent = displayWinner();

    /*document.getElementsByClassName('update')[0].innerHTML = startRoundUpdate;
    document.getElementsByClassName('update')[1].innerHTML = endRoundUpdate;
    document.getElementsByClassName('update')[2].innerHTML = displayWinner();*/

}

let newRound = document.createElement("button");
scoreboard.classList.add('newRound');
newRound.innerText = "Play again!";
newRound.addEventListener("click", function reload() {
    reload = location.reload();
}, false);
newRound.setAttribute("style", "background: yellow; margin: 16px;")
scoreboard.appendChild(newRound);

