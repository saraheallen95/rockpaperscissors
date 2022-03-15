/*functions to play game etc.*/

const html = document.getElementsByTagName("html")[0];
html.setAttribute("style", "margin: 0; padding: 0; height: 100%; color: black;");

const body = document.getElementsByTagName("body")[0];
body.setAttribute("style", "margin: 0; padding: 0; height: 100%; color: black;");

const container = document.createElement('div');
container.setAttribute("style", "margin: 0; height: 100%; display: flex; background: black; justify-content: center; flex-direction: column; flex: 1; align-items: center;")
body.appendChild(container);

let saloondoor = document.createElement("AUDIO");
document.body.appendChild(saloondoor);
saloondoor.src = "./saloondoor.wav"
saloondoor.muted = true;
saloondoor.autoplay = true;

const gif = document.createElement("img");
gif.src  = "./saloon.png";
gif.style.width = "300px";
gif.style.height = "auto";
container.appendChild(gif);
titleExists = false;

const banner = document.createElement('div');

gif.onmouseover = function () {
    gif.style.width = "350px";
    gif.style.height = "auto";
    titleExists = true;

    if (titleExists == true) {
        container.appendChild(banner);
        banner.textContent = "Ready for a good old fashioned cowboy shootout...rock paper scissors style?";
        banner.setAttribute("style", "background-color: black; margin: 24px; text-align: center; font-family: courier new, sans-serif; color: white; display: flex; justify-content: center; align-items: center; font-weight: extra bold; font-size: 32px; border: 5px; wrap: no-wrap;");
    }
    

};
 

gif.onmouseout = function(){
    titleExists = false;

    gif.style.width = "300px";
    gif.style.height = "auto";
    banner.remove();
};

gif.onclick = function() {createGame()};


function createGame () {

body.style.removeProperty("height");
banner.remove();
gif.remove();

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

        winnerDisplayContainer.style.background = "#c1bab5";
        winnerDisplay.style.background = "#c1bab5";
        return "GAME OVER!";
    }
    else if ((playerWins > computerWins) && (playerWins == 5)) {

        winnerDisplayContainer.style.background = "#c1bab5";
        winnerDisplay.style.background = "#c1bab5";

        return "GAME OVER!";
    }

    else return;

       
}

function setMessage () {

    if (gameOver == false) {
    
        if (computerWins > playerWins) {
            return endRoundUpdate + " Don't give up! The golden lasso could still be yours...";
        }

        else if ((computerWins == playerWins) && ((computerWins + playerWins) > 0)) {
            return endRoundUpdate + " It's a close one! Stay on your toes - your opponent's a straight shooter.";
        }

        else if (playerWins > computerWins) {
            return endRoundUpdate + " You're ahead for now, but don't get cocky, partner!";
        }

        else return endRoundUpdate + " It's a close one! Stay on your toes - your opponent's a straight shooter.";


    }   

    else if (gameOver == true) {

        if (computerWins > playerWins) {
            return endRoundUpdate + " Beter luck next time, buddy boy!";
        }

        else return endRoundUpdate + " You won! There's a new sheriff in town...for now.";
        
    }

    return;

}

 
function createPlayAgainBtn () {
    console.log("GAME OVER! Congratulations, you beat the computer!"); 
    const newRound = document.createElement("button");
    scoreboard.classList.add('newRound');
    newRound.setAttribute("style", "font-family: courier new, sans-serif; padding: 4px; background: #ec965d; margin: 16px");
    newRound.innerText = "Play again!";
    newRound.addEventListener("click", function reload() {
        reload = location.reload();
    }, false);
    scoreboard.appendChild(newRound);
}


function gunshotSound() {
    
    if (gameOver == false) {
        gunshot.muted = false;
        gunshot.play();
        return;
    }

    else return;
}

function playRound(playerSelection, score) {

    gunshotSound();
    endRoundUpdate = "";
    computerSelection = computerPlay();

    startRoundUpdate = "";

    if (gameOver == true)
    {
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
        endRoundUpdate += "Computer wins! " + computerSelection + " beats " + playerSelection + "!";

    }

    calculateScore(score);

    if (currentWinnerScore == 5) {
        displayWinner();
        gameOver = true;
        createPlayAgainBtn();
        message.textContent = setMessage(); 
        buttons.remove();
       
        return;
    }
    
    message.textContent = setMessage(); 

   
    return;


    }

    function calculateScore (score) {
            
        score.textContent = "Computer Score: " + computerWins;
        myScore.textContent = "Your Score: " + playerWins;
        winnerDisplay.textContent = displayWinner();
    
    }
    
/* begin creating DOM here*/


let westerntheme = document.createElement("AUDIO");
document.body.appendChild(westerntheme);
westerntheme.src = "./westerntheme.wav"
westerntheme.autoplay = true;
westerntheme.muted = true;

let gunshot = document.createElement("AUDIO");
document.body.appendChild(gunshot);
gunshot.src = "./gunshot.wav"
gunshot.muted = true;
gunshot.autoplay = true;

let firstClick = true;

document.body.addEventListener("click", function () {
  
    westerntheme.muted = false;
    westerntheme.play();
    westerntheme.loop = true;

    if (firstClick == true) {
        saloondoor.muted = false;
        saloondoor.play();
        firstClick = false;
    }

})





const title = document.createElement('div');
container.classList.add('title');
container.appendChild(title);
title.textContent = "Sarah's Rootin' Tootin' Western Throwdown!";
title.setAttribute("style", "text-align: center; margin: 64px; background-color: black; font-family: courier new, sans-serif; color: white; display: flex; justify-content: center; align-items: center; font-weight: extra bold; font-size: 32px; border: 5px; wrap: no-wrap;");

const cowboyhat = document.createElement('img')
cowboyhat.src  = "./cowboyhat.png";
cowboyhat.setAttribute = ("style", "display: flex;")
cowboyhat.style.width = "275px";
cowboyhat.style.height = "auto";
cowboyhat.style.maxHeight = "100%";
cowboyhat.style.maxWidth = "100%";
cowboyhat.style.transform = "rotate(40deg)";
container.classList.add('cowboyhat');
container.appendChild(cowboyhat);

const messageboard = document.createElement("div");
container.classList.add("messageboard");
messageboard.setAttribute("style", "background-color: black; text-align: center; display: flex; justify-content: center; margin-top: 16px;")
container.appendChild(messageboard);

let message = document.createElement("div");
messageboard.classList.add("message");
message.setAttribute("style", "display: flex; margin-bottom: 40px; justify-content: center; align-items: center; color: white; text-align: center; font-family: courier new, sans-serif;")
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
compScore.setAttribute("style", "font-family: courier new, sans-serif; background: #e4743c; display: flex; justify-content: center; margin: 16px; padding: 16px;");
compScore.textContent = "Computer Score: " + computerWins;
scores.appendChild(compScore);

let myScore = document.createElement('p');
scores.classList.add('myScore');
myScore.textContent = "Your Score: " + playerWins;
myScore.setAttribute("style", "font-family: courier new, sans-serif; background: #e4743c; display: flex; justify-content: center; padding: 16px;");
scores.appendChild(myScore);


const winnerDisplayContainer = document.createElement('div');
scoreboard.classList.add('winnerDisplayContainer');
winnerDisplayContainer.setAttribute("style", "font-family: courier new, sans-serif; max-height: 100%; background: #e4743c; padding: 5x; border: 6px black solid; ");
scoreboard.appendChild(winnerDisplayContainer);

const winnerDisplay = document.createElement('p');
winnerDisplayContainer.classList.add("winnerDisplay");
winnerDisplay.setAttribute("style", "font-family: courier new, sans-serif; margin: 0; font-size: 64px; max-height: 100%;")
winnerDisplayContainer.appendChild(winnerDisplay);

const buttons = document.createElement('buttons');
container.classList.add('buttons');
container.appendChild(buttons);
buttons.setAttribute("style", "font-family: courier new, sans-serif; justify-content: center; display: flex; margin-bottom: 64px; background: black;");

let rock = document.createElement("img");
rock.src  = "./rock.png";
rock.style.width = "100px";
rock.style.height = "auto";
rock.style.padding = "16px";
rock.style.maxHeight = "100%";
buttons.classList.add("rock");
buttons.appendChild(rock);
rock.onclick = function() { playRound("Rock", compScore)};
    

let paper = document.createElement("img");
buttons.classList.add("paper");
paper.src = "./paper.png";
paper.style.width = "100px";
paper.style.maxHeight = "100%";
paper.style.height = "auto";
paper.style.padding = "16px";
buttons.appendChild(paper);
paper.onclick = function () {playRound("Paper", compScore)};


let scissors = document.createElement("img");
buttons.classList.add("scissors");
scissors.src = "./scissors.png";
scissors.style.width = "100px";
scissors.style.height = "auto";
scissors.style.padding = "16px";
scissors.style.maxHeight = "100%";
buttons.appendChild(scissors);
scissors.onclick = function () {playRound("Scissors", compScore)};

}
