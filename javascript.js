
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
let round = 0; 
let numRounds = 5; 
let gameOver = false;
let roundResult;

function playRound (playerSelection) { //Adjusts score depending on result of a round
    let computerSelection = computerPlay();

    if (round < numRounds) {
        document.getElementById('round').innerHTML = `Round ${round+1}`;
        getRoundResult(playerSelection, computerSelection);
        if (roundResult === 'tie') {
            document.getElementById('round-msg').innerHTML = `You played ${playerSelection} and the computer played ${computerSelection}. TIE ROUND!`;
        } else if (roundResult === 'player-win') {
            playerScore += 1;
            document.getElementById('round-msg').innerHTML = `You played ${playerSelection} and the computer played ${computerSelection}. YOU WIN THE ROUND!`;
            document.getElementById('player-score').innerHTML = `${playerScore}`;
        } else {
            computerScore += 1;
            document.getElementById('round-msg').innerHTML = `You played ${playerSelection} and the computer played ${computerSelection}. YOU LOSE THE ROUND!`;
            document.getElementById('computer-score').innerHTML = `${computerScore}`;
        }
    } 
    if (round === numRounds-1) {
        gameOver = true;
        getResult(playerScore, computerScore);
    } 
    round++;
}

function getRoundResult (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return roundResult = 'tie';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
            playerSelection == 'paper' && computerSelection == 'rock' ||
            playerSelection == 'scissors' && computerSelection == 'paper') {
        return roundResult = 'player-win';
    } else {
        return roundResult = 'computer-win';
    }
}

function getResult (playerScore, computerScore) {
    const images = document.querySelector('.score');
    const finalResult = document.createElement('h2');
    finalResult.className = 'finalResult';

    if (playerScore < computerScore) {
        finalResult.innerHTML = `☹️ GAME OVER. YOU LOSE! ☹️`;
    } else if (playerScore > computerScore) {
        finalResult.innerHTML = '😁 GAME OVER. YOU WIN! 😁';
    } else {     
        finalResult.innerHTML = '😐 GAME OVER YOU TIED! 😐';
    }
    images.after(finalResult);
    const replay = document.createElement('button');
    replay.className = 'replay';
    replay.innerHTML = 'Replay';
    replay.addEventListener('click', resetGame);
    finalResult.after(replay);
}

function resetGame () {
    document.getElementById('round').innerHTML = `Let's play again!`;
    document.getElementById('round-msg').innerHTML = `First to 5 wins. Your move!`;
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').innerHTML = `${playerScore}`;
    document.getElementById('computer-score').innerHTML = `${computerScore}`;
    round = 0; 
    gameOver = false;
    finalResult = document.querySelector('.finalResult');
    finalResult.remove();
    replay = document.querySelector('.replay');
    replay.remove();
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {playRound('rock')});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {playRound('paper')});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {playRound('scissors')});
