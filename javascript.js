
function computerPlay () { //Computer randomly plays Rock, Paper, or Scissors
    
    function getRandInt (min, max) { //Randomly generates an interger
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let computerChoice = getRandInt(1, 3); //Computer makes a choice based on random integer from 1-3
    if (computerChoice === 1) {
        return 'rock';
        } else if (computerChoice === 2) {
            return 'paper';
        } else {
            return 'scissors';
        }        
}
        
let playerScore = 0;
let computerScore = 0;
let round = 1; 
let numRounds = 5; 

function playRound (playerSelection) { //Adjusts score depending on result of a round
    const btns = document.querySelector('.buttons');
    const result = document.createElement('p');
    result.classList.add('content');

    let computerSelection = computerPlay();

    if (round > numRounds) {
        getResult(playerScore, computerScore);
        return;
    }

    result.textContent = `Round ${round}: You played ${playerSelection}. The computer played ${computerSelection}`; //Prints result of each round
    btns.appendChild(result);
    calcScore(playerSelection, computerSelection);
    round++;
}

function calcScore (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return; //Tie, score doesn't change
    } else if (playerSelection == 'rock' && computerSelection == 'paper' ||
            playerSelection == 'paper' && computerSelection == 'scissors' ||
            playerSelection == 'scissors' && computerSelection == 'rock') {
        return playerScore += 1; //Player wins, increase player score by 1
    } else {
        return computerScore += 1; //Computer wins, increase computer score by 1
    }
}

/*function playGame (playerSelection) {
    


    //Loops through multiple rounds
    for (round = 1; round <= numRounds; round++) { 
        let computerSelection = computerPlay ();
        playRound(playerSelection, computerSelection);
        
        const btns = document.querySelector('.buttons');
        const result = document.createElement('p');
        result.classList.add('content');
        result.textContent = `Round ${round}: You played ${playerSelection}. The computer played ${computerSelection}`; //Prints result of each round
        btns.appendChild(result);

        if (round === numRounds) {
            getResult(playerScore, computerScore);
        }
    }
}*/

function getResult(playerScore, computerScore) {
    const btns = document.querySelector('.buttons');
    const finalResult = document.createElement('p');
    finalResult.classList.add('content');
    
    if (playerScore < computerScore) {
        
        finalResult.textContent = `GAME OVER! YOU LOSE :( The final score is ${playerScore}:${computerScore}`;   
    } else if (playerScore > computerScore) {
        finalResult.textContent = `GAME OVER! YOU WIN :) The final score is ${playerScore}:${computerScore}`;
    } else {     
        finalResult.textContent = `GAME OVER! YOU TIED :| The final score is ${playerScore}:${computerScore}`;
    }
    btns.appendChild(finalResult);
}


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {playRound('rock')});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {playRound('paper')});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {playRound('scissors')});
