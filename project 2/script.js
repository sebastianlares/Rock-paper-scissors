
const playerScore = document.querySelector('.playerScore');
const aiScore = document.querySelector('.aiScore');
const aiChoice = document.querySelector('.aiChoice');
let rock_paper_scis = ['rock', 'paper', 'scissors'];

const btnRock = document.querySelector('.rock');

const btnPaper = document.querySelector('.paper');

const btnScissors = document.querySelector('.scissors');

const rock = btnRock.addEventListener('click', function (e) 
{
    computerSelection = rock_paper_scis[Math.floor(Math.random()*rock_paper_scis.length)];
    playRound('rock', computerSelection); 
});

const paper = btnPaper.addEventListener('click', function (e)
{
    computerSelection = rock_paper_scis[Math.floor(Math.random()*rock_paper_scis.length)];
    playRound('paper',computerSelection);
});

const scissors = btnScissors.addEventListener('click', function (e)
{
    computerSelection = rock_paper_scis[Math.floor(Math.random()*rock_paper_scis.length)];
    playRound('scissors', computerSelection);
});


function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    { 
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        aiScore.textContent = parseInt(aiScore.textContent) + 1;
        aiChoice.textContent = `Looks like a tie, Ai choice is also ${computerSelection}`;
    }
    else if (playerSelection === "rock" && computerSelection === "paper")
    {
        aiScore.textContent = parseInt(aiScore.textContent)+ 1;
        aiChoice.textContent = `Unlucky, Ai choice is ${computerSelection}`;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors")
    {
        aiScore.textContent = parseInt(aiScore.textContent) + 1;
        aiChoice.textContent = `Unlucky, Ai choice is ${computerSelection}`;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock")
    {
        aiScore.textContent = parseInt(aiScore.textContent) + 1;
        aiChoice.textContent = `Unlucky, Ai choice is ${computerSelection}`;
    }
    else
    {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        aiChoice.textContent = `Lucky you! Ai choice is ${computerSelection}`;
    }
    
    if (parseInt(playerScore.textContent) == 5 && parseInt(aiScore.textContent) == 5)
    {   
        alert('Its a tie!');
        reset ();
    }

    else if (parseInt(playerScore.textContent) == 5)
    {   
        alert('You win, congratz!');
        reset ();
    }
    else if (parseInt(aiScore.textContent) == 5)
    {   
        alert('The Ai win this time!');
        reset ();
    }
}


function reset () {
    playerScore.textContent = 0;
    aiScore.textContent = 0;
    aiChoice.textContent = 'Press any button to play again!'
}