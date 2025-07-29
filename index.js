const choices = ['rock', 'paper', 'scissors'];
const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');
const resultElem = document.getElementById('result');
const playerc=document.getElementById('player-choice');
const computerc=document.getElementById('computer-choice');

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let resultText = "";
    let animationClass = "";
    
    // Get emoji representations
    const emojiMap = {
        'rock': '🪨',
        'paper': '📃',
        'scissors': '✂️'
    };
    
    if(playerChoice === computerChoice){
        resultText = '🤝 IT\'S A TIE!';
        animationClass = 'tie-animation';
    }
    else{
        switch(playerChoice){
            case 'rock':
                resultText = computerChoice === 'scissors' ? '🎉 YOU WIN!' : '😔 YOU LOSE!';
                break;
            case 'paper':
                resultText = computerChoice === 'rock' ? '🎉 YOU WIN!' : '😔 YOU LOSE!';
                break;
            case 'scissors':
                resultText = computerChoice === 'paper' ? '🎉 YOU WIN!' : '😔 YOU LOSE!';
                break;
        }
        
        if(resultText.includes('WIN')){
            playerScore++;
            animationClass = 'win-animation';
        } else {
            computerScore++;
            animationClass = 'lose-animation';
        }
    }
    
    // Update choices with emojis
    playerc.textContent = `Player choice: ${emojiMap[playerChoice]} ${playerChoice.toUpperCase()}`;
    computerc.textContent = `Computer choice: ${emojiMap[computerChoice]} ${computerChoice.toUpperCase()}`;
    
    // Update scores
    updateScore();
    
    // Update result with animation
    resultElem.className = ''; // Remove any existing animation classes
    resultElem.textContent = resultText;
    
    // Add animation class after a brief delay to trigger the animation
    setTimeout(() => {
        resultElem.classList.add(animationClass);
    }, 50);
    
    // Remove animation class after animation completes
    setTimeout(() => {
        resultElem.classList.remove(animationClass);
    }, 650);
}

function updateScore(){

    playerScoreElem.textContent = `Player score: ${playerScore}`;
    computerScoreElem.textContent = `Computer score: ${computerScore}`;
}