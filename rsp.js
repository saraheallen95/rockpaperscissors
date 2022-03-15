/*functions to play game etc.*/

let playerWins = 0;
let computerWins = 0;
let currentWinnerScore = 0;
let startRoundUpdate = ""
let endRoundUpdate = "";
let playerSelection = "";
let gameOver = false;

function computerPlay () {

    let rspArray = ['Rock', 'Paper', 'Scissors'];
    const random = rspArray[~~(Math.random() * rspArray.length)];
    return random;
}


function displayWinner () {
    
    if ((computerWins > playerWins) && (computerWins == 5)) {
        console.log ("GAME OVER!");
        return "GAME OVER!";
    }
    else if ((playerWins > computerWins) && (playerWins == 5)) {
        return "GAME OVER!";
    }

    else return "Keep playing...";

       
}

function setMessage () {

    if (gameOver == false) {
    
        if (computerWins > playerWins) {
            return "Don't give up! The golden lasso could still be yours...";
        }

        else if (computerWins == playerWins) {
            return "It's a close one! Stay on your toes - your opponent's a straight shooter.";
        }

        else if (playerWins > computerWins) {
            return "You're ahead for now, but don't get cocky, partner!"
        }

    }   

    else if (gameOver == true) {

        if (computerWins > playerWins) {
            return "Beter luck next time, buddy boy!";
        }

        else return "You won! There's a new sheriff in town...for now.";
        
    }

    return;

}

 
function createPlayAgainBtn () {
    console.log("GAME OVER! Congratulations, you beat the computer!"); 
    const newRound = document.createElement("button");
    scoreboard.classList.add('newRound');
    newRound.setAttribute("style", "font-family: courier new, sans-serif; padding: 4px; margin: 16px");
    newRound.innerText = "Play again!";
    newRound.addEventListener("click", function reload() {
        reload = location.reload();
    }, false);
    scoreboard.appendChild(newRound);
}



function playRound(playerSelection, score) {

    endRoundUpdate = "";
    computerSelection = computerPlay();
    console.log(computerWins + playerWins + " within playRound");

    startRoundUpdate = "";
    startRoundUpdate += "The computer chose " + computerSelection + ". You chose rock.";

    if (gameOver == true)
    {
        return;
    }

    else if (currentWinnerScore == 5) {
        createPlayAgainBtn();
        gameOver = true;
        return;
     }


    else if (computerSelection == playerSelection) {
        currentWinnerScore = playerWins;
        endRoundUpdate = "You tie! " + playerSelection + " ties with " + computerSelection + "!";
    }
    
    else if (((computerSelection == "Scissors") && (playerSelection == "Rock")) || ((computerSelection == "Rock") && (playerSelection == "Paper")) || ((computerSelection == "Paper") && (playerSelection == "Scissors"))) {
        playerWins += 1;
        currentWinnerScore = playerWins;

        endRoundUpdate = "You win! " + playerSelection + " beats " + computerSelection + "!";

    }

    else if (((computerSelection == "Scissors") && (playerSelection != "Rock")) || ((computerSelection == "Rock") && (playerSelection != "Paper")) || ((computerSelection == "Paper") && (playerSelection != "Scissors"))) {

        computerWins += 1;
        currentWinnerScore = computerWins;
        endRoundUpdate += "Computer wins! " + computerSelection + "beats " + playerSelection + "!";

    }

    calculateScore(score);

    if (currentWinnerScore == 5) {
        displayWinner();
        gameOver = true;
        message.textContent = setMessage(); 
        return;
    }
    
    message.textContent = setMessage(); 

   
    return;


    }

    function calculateScore (score) {
            
        score.textContent = "Computer Score: " + computerWins;
        myScore.textContent = "Player Score: " + playerWins;
        winnerDisplay.textContent = displayWinner();
    
    }
    
/* begin creating DOM here*/

const html = document.getElementsByTagName("html")[0];
html.setAttribute("style", "margin: 0; padding: 0; height: 100%; color: black;");

const body = document.getElementsByTagName("body")[0];
body.setAttribute("style", "margin: 0; padding: 0; height: 100%; color: black;");

const container = document.querySelector('#container');
container.setAttribute("style", "height: 100%; margin: 0; display: flex;  background: black; justify-content: center; flex-direction: column; flex: 1; align-items: center;")
body.appendChild(container);

const cowboyhat = document.createElement('img')
cowboyhat.src  = "./cowboyhat.png";
cowboyhat.style.width = "300px";
cowboyhat.style.height = "auto";
cowboyhat.style.transform = "rotate(40deg)";
container.appendChild(cowboyhat);

const title = document.createElement('div');
container.classList.add('title');
container.appendChild(title);
title.textContent = "Sarah's Rootin' Tootin' Western Throwdown!";
title.setAttribute("style", "margin-top: -24px; background-color: black; font-family: courier new, sans-serif; color: white; display: flex; justify-content: center; align-items: center; font-weight: extra bold; font-size: 32px; border: 5px; wrap: no-wrap;");

const messageboard = document.createElement("div");
container.classList.add("messageboard");
messageboard.setAttribute("style", "background-color: black; display: flex; justify-content: center; margin-top: 16px;")
container.appendChild(messageboard);

let message = document.createElement("p");
messageboard.classList.add("message");
message.setAttribute("style", "color: white; font-family: courier new, sans-serif;")
message.textContent = "The throwdown begins...";
messageboard.appendChild(message);

const scoreboard = document.createElement('div');
container.classList.add('scoreboard');
scoreboard.setAttribute("style", "font-family: courier new, sans-serif; background: black; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 16px; padding-top: 0px;");
container.appendChild(scoreboard);

const scores = document.createElement('div');
scoreboard.classList.add('scores');
scores.setAttribute("style", "display: flex; justify-content: center;");
scoreboard.appendChild(scores);

let compScore = document.createElement('p');
scores.classList.add('compScore');
compScore.setAttribute("style", "font-family: courier new, sans-serif; background: pink; display: flex; justify-content: center; margin: 16px;");
compScore.textContent = "Computer Score: " + computerWins;
scores.appendChild(compScore);

let myScore = document.createElement('p');
scores.classList.add('myScore');
myScore.textContent = "Your Score: " + playerWins;
myScore.setAttribute("style", "font-family: courier new, sans-serif; background: green; display: flex; justify-content: center;");
scores.appendChild(myScore);


const winnerDisplayContainer = document.createElement('div');
scoreboard.classList.add('winnerDisplayContainer');
winnerDisplayContainer.setAttribute("style", "font-family: courier new, sans-serif; background: red; padding: 5x; border: 6px black solid; ");
scoreboard.appendChild(winnerDisplayContainer);

const winnerDisplay = document.createElement('p');
winnerDisplayContainer.classList.add("winnerDisplay");
winnerDisplay.textContent = "Pick a player!";
winnerDisplay.setAttribute("style", "padding: 6px; font-family: courier new, sans-serif;")
winnerDisplayContainer.appendChild(winnerDisplay);

const buttons = document.createElement('buttons');
container.classList.add('buttons');
container.appendChild(buttons);
buttons.setAttribute("style", "font-family: courier new, sans-serif; justify-content: center; display: flex; margin: 16px; background: black;");

let rock = document.createElement("button");
rock.textContent = "Rock";
buttons.classList.add("rock");
rock.setAttribute("style", "font-family: courier new, sans-serif; text: black; background: white; margin: 16px;");
buttons.appendChild(rock);
/*$('#MyButton').click(function(){
       CapacityChart(); */
rock.onclick = function() { playRound("Rock", compScore)};
    

let paper = document.createElement("button");
buttons.classList.add("paper");
paper.textContent = "Paper";
paper.setAttribute("style", "font-family: courier new, sans-serif; text: black; background: white; margin: 16px;");
/*paper.onclick = playRound(select('paper'), computerPlay()); */
buttons.appendChild(paper);
paper.onclick = function () {playRound("Paper", compScore)};


let scissors = document.createElement("button");
buttons.classList.add("scissors");
scissors.textContent = "Scissors";
scissors.setAttribute("style", "font-family: courier new, sans-serif; text: black; background: white; margin: 16px;");
/*scissors.onclick = playRound(select('scissors'), computerPlay()); */
buttons.appendChild(scissors);
scissors.onclick = function () {playRound("Scissors", compScore)};


