function computerPlay()
{
    let words = ['ROCK','PAPER','SCISSORS'];
    let word = words[Math.floor(Math.random()*words.length)];
    return word;
}


function playRound(playerSelection, computerSelection) 
{
    if(playerSelection=='ROCK' && computerSelection=='SCISSORS')
    {
        console.log("You Won! Rock beats Scissors");
    }
    else if(playerSelection=='ROCK' && computerSelection=='PAPER')
    {
        console.log("You Lose! Paper beats Rock");
    }
    else if(playerSelection=='ROCK' && computerSelection=='ROCK')
    {
        console.log("Tie game!");
    }
    else if(playerSelection=='PAPER' && computerSelection=='ROCK')
    {
        console.log("You Won! Paper beats Rock");
    }
    else if(playerSelection=='PAPER' && computerSelection=='SCISSORS')
    {
        console.log("You Lose! Scissors beats Paper");
    }
    else if(playerSelection=='PAPER' && computerSelection=='PAPER')
    {
        console.log("Tie game!");
    }
    else if(playerSelection=='SCISSORS' && computerSelection=='PAPER')
    {
        console.log("You Won! Scissors beats Paper");
    }else if(playerSelection=='SCISSORS' && computerSelection=='ROCK')
    {
        console.log("You Lose! Rock beats Scissors");
    }else if(playerSelection=='SCISSORS' && computerSelection=='PAPER')
    {
        console.log("You Tie!");
    }
    else {
        console.log("Invalid Input!");
    }

}

function game()
{
    for(i=0;i<5;i++)
    {
      let playerSelection = prompt('Give your input').toUpperCase();
      let computerSelection = computerPlay();
      playRound(playerSelection, computerSelection);
    }
}

game();
