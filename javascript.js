function computerPlay()
{
    let words = ['ROCK','PAPER','SCISSORS'];
    let word = words[Math.floor(Math.random()*words.length)];
    return word;
}


function playRound(playerSelection, computerSelection) 
{
    let msg;
    if(playerSelection=='ROCK' && computerSelection=='SCISSORS')
    {
       msg = "You Won! Rock beats Scissors";
    }
    else if(playerSelection=='ROCK' && computerSelection=='PAPER')
    {
        msg = "You Lose! Paper beats Rock";
    }
    else if(playerSelection=='ROCK' && computerSelection=='ROCK')
    {
        msg = "Tie game!";
    }
    else if(playerSelection=='PAPER' && computerSelection=='ROCK')
    {
        msg = "You Won! Paper beats Rock";
    }
    else if(playerSelection=='PAPER' && computerSelection=='SCISSORS')
    {
        msg = "You Lose! Scissors beats Paper";
    }
    else if(playerSelection=='PAPER' && computerSelection=='PAPER')
    {
        msg = "Tie game!";
    }
    else if(playerSelection=='SCISSORS' && computerSelection=='PAPER')
    {
        msg = "You Won! Scissors beats Paper";
    }else if(playerSelection=='SCISSORS' && computerSelection=='ROCK')
    {
        msg = "You Lose! Rock beats Scissors";
    }else if(playerSelection=='SCISSORS' && computerSelection=='PAPER')
    {
        msg = "You Tie!";
    }
    else {
        msg = "Invalid Input!";
    }
      return msg;
}

function game()
{
    for(i=0;i<5;i++)
    {
      let playerSelection = prompt('Give your input for Round '+i).toUpperCase();
      let computerSelection = computerPlay();
      let result = playRound(playerSelection, computerSelection)
      alert(result);
    }
}

game();
