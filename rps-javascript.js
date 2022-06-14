let player_score=0,computer_score=0;
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
           msg = ["You Won!", "Rock beats Scissors"];
           ++player_score;
           
        }
        else if(playerSelection=='ROCK' && computerSelection=='PAPER')
        {
            msg = ["You Lose!", "Paper beats Rock"];
            ++computer_score;
        }
        else if(playerSelection=='ROCK' && computerSelection=='ROCK')
        {
            msg = ["Tie game!","Rock ties with Rock"];
        }
        else if(playerSelection=='PAPER' && computerSelection=='ROCK')
        {
            msg = ["You Won!", "Paper beats Rock"];
            ++player_score;
        }
        else if(playerSelection=='PAPER' && computerSelection=='SCISSORS')
        {
            msg = ["You Lose!", "Scissors beats Paper"];
            ++computer_score;
        }
        else if(playerSelection=='PAPER' && computerSelection=='PAPER')
        {
            msg = ["Tie game!","Paper ties with Paper"];
        }
        else if(playerSelection=='SCISSORS' && computerSelection=='PAPER')
        {
            msg = ["You Won!", "Scissors beats Paper"];
            ++player_score;
        }else if(playerSelection=='SCISSORS' && computerSelection=='ROCK')
        {
            msg = ["You Lose!", "Rock beats Scissors"];
            ++computer_score;
        }else if(playerSelection=='SCISSORS' && computerSelection=='PAPER')
        {
            msg = ["You Tie!","Scissors ties with Scissors"];
        }
          return msg;
    } 
    
    let btn1,btn2,btn3;
    function myfunction()
    {
        btn1 = document.getElementById('btn1').value;
    }
    function myfunction1()
    {
        btn2 = document.getElementById('btn2').value;
    }
    function myfunction2()
    {
        btn3 = document.getElementById('btn3').value;
    }
    
    function select_player()
    {
        if(btn1!= undefined)
            return btn1;
        else if(btn2!=undefined)
            return btn2;
        else if(btn3!=undefined)
            return btn3;
    }
    function game()
    {
        let d1 = document.getElementById('computer_score');
        let d2 = document.getElementById('player_score');
        let p1 = document.getElementById('p1');
        let p2 = document.getElementById('p2');
        let playerSelection = select_player();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(player_score,computer_score);
        d2.textContent = player_score;
        d1.textContent = computer_score;
        if((player_score==4 && computer_score<4) || (computer_score==4 && player_score<4))
        {

            //button1
            document.getElementById('btn1').addEventListener('click',function() 
            {
                if(player_score==5)
                {
                    document.getElementById("myModal").style.display = "block"; 
                    document.getElementById('mod').textContent = "You won the Game!";
                }
            })
            //button2
            document.getElementById('btn2').addEventListener('click',function() 
            {
                if(player_score==5)
                {
                    document.getElementById("myModal").style.display = "block";
                    document.getElementById('mod').textContent = "You won the Game!";
                }
            })
            //button3
            document.getElementById('btn3').addEventListener('click',function() 
            {
                if(player_score==5)
                {
                    document.getElementById("myModal").style.display = "block";
                    document.getElementById('mod').textContent = "You won the Game!";
                }
            })

            //button1

            document.getElementById('btn1').addEventListener('click',function() 
            {
                if(computer_score==5)
                {
                    document.getElementById("myModal").style.display = "block";
                    document.getElementById('mod').textContent = "You lose the Game!";
                }
            })
            
            //button2
            document.getElementById('btn2').addEventListener('click',function() 
            {
                if(computer_score==5)
                {
                    document.getElementById("myModal").style.display = "block"; 
                    document.getElementById('mod').textContent = "You lose the Game!";
                }
            })
            
            //button3
            document.getElementById('btn3').addEventListener('click',function() 
            {
                if(computer_score==5)
                {
                    document.getElementById("myModal").style.display = "block";
                    document.getElementById('mod').textContent = "You lose the Game!";
                }
            })
        }
        else
        {
            p1.textContent = result[0];
            p2.textContent = result[1];
            d1.textContent = computer_score;
            d2.textContent = player_score;
        }    
    }

    function Restart()
    {
        location.reload();
    }
