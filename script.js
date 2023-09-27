function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return 'It’s a tie!';
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Test the function
console.log(playRound('Rock', computerPlay()));

document.addEventListener('DOMContentLoaded', function() {
    // Assign button elements to variables
    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');
    const resultDiv = document.getElementById('result');
    
    // Add event listeners to buttons
    rockBtn.addEventListener('click', function() {
        playGame('Rock');
    });
    
    paperBtn.addEventListener('click', function() {
        playGame('Paper');
    });
    
    scissorsBtn.addEventListener('click', function() {
        playGame('Scissors');
    });
    
    // Game function
    function playGame(playerChoice) {
        const computerChoice = computerPlay();
        const result = playRound(playerChoice, computerChoice);
        resultDiv.textContent = result;
    }
});
