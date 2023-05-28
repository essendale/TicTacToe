
let lastMove = 0;

let gameOver = {};
//gameOver.topCenter = 5;
//console.log(gameOver.topCenter);
//console.log(gameOver);


function buttonMove1()
{
  if (document.querySelector('.button1').innerHTML === '')
    {
      if (lastMove===0)
        { 
          gameOver.topLeft = 1;
          document.querySelector('.button1').innerHTML = 'x';
          lastMove = 1;
          console.log(gameOver.topLeft);
        }
      else
        {
          document.querySelector('.button1').innerHTML = 'o';
          lastMove = 0;          
          gameOver.topLeft = 0;
          console.log(gameOver.topLeft);
        }
    }
    winner();
}
function buttonMove2()
{
  if (document.querySelector('.button2').innerHTML === '')
    {
      if (lastMove===0)
        { 
          gameOver.topMid = 1;
          document.querySelector('.button2').innerHTML = 'x';
          lastMove = 1;
          console.log(gameOver.topMid);
        }
      else
        {
          document.querySelector('.button2').innerHTML = 'o';
          lastMove = 0;          
          gameOver.topMid = 0;
          console.log(gameOver.topMid);
        }
    }
    winner();}
function buttonMove3()
{
  if (document.querySelector('.button3').innerHTML === '')
    {
      if (lastMove===0)
        { 
          gameOver.topRight = 1;
          document.querySelector('.button3').innerHTML = 'x';
          lastMove = 1;
          console.log(gameOver.topRight);
        }
      else
        {
          document.querySelector('.button3').innerHTML = 'o';
          lastMove = 0;          
          gameOver.topRight = 0;
          console.log(gameOver.topRight);
        }
    }
    winner();}
function buttonMove4()
{
  if (document.querySelector('.button4').innerHTML === '')
    {
      if (lastMove===0)
        { 
          gameOver.midLeft = 1;
          document.querySelector('.button4').innerHTML = 'x';
          lastMove = 1;
          console.log(gameOver.midLeft);
        }
      else
        {
          document.querySelector('.button4').innerHTML = 'o';
          lastMove = 0;          
          gameOver.midLeft = 0;
          console.log(gameOver.midLeft);
        }
    }
    winner();}
function buttonMove5()
{
  if (document.querySelector('.button5').innerHTML === '')
    {
      if (lastMove===0)
        { 
          gameOver.midMid = 1;
          document.querySelector('.button5').innerHTML = 'x';
          lastMove = 1;
          console.log(gameOver.midMid);
        }
      else
        {
          document.querySelector('.button5').innerHTML = 'o';
          lastMove = 0;          
          gameOver.midMid = 0;
          console.log(gameOver.midMid);
        }
    }
    winner();}
function buttonMove6()
{
  if (document.querySelector('.button6').innerHTML === '')
    {
      if (lastMove===0)
        { 
          gameOver.midRight = 1;
          document.querySelector('.button6').innerHTML = 'x';
          lastMove = 1;
          console.log(gameOver.midRight);
        }
      else
        {
          document.querySelector('.button6').innerHTML = 'o';
          lastMove = 0;          
          gameOver.midRight = 0;
          console.log(gameOver.midRight);
        }
    }
    winner();}
function buttonMove7()
{
  if (document.querySelector('.button7').innerHTML === '')
    {
      if (lastMove===0)
        { 
          gameOver.botLeft = 1;
          document.querySelector('.button7').innerHTML = 'x';
          lastMove = 1;
          console.log(gameOver.botLeft);
        }
      else
        {
          document.querySelector('.button7').innerHTML = 'o';
          lastMove = 0;          
          gameOver.botLeft = 0;
          console.log(gameOver.botLeft);
        }
    }
    winner();}
function buttonMove8()
{
  if (document.querySelector('.button8').innerHTML === '')
    {
      if (lastMove===0)
        { 
          gameOver.botMid = 1;
          document.querySelector('.button8').innerHTML = 'x';
          lastMove = 1;
          console.log(gameOver.botMid);
        }
      else
        {
          document.querySelector('.button8').innerHTML = 'o';
          lastMove = 0;          
          gameOver.botMid = 0;
          console.log(gameOver.botMid);
        }
    }
    winner();}
function buttonMove9()
{
  if (document.querySelector('.button9').innerHTML === '')
    {
      if (lastMove===0)
        { 
          gameOver.botRight = 1;
          document.querySelector('.button9').innerHTML = 'x';
          lastMove = 1;
          console.log(gameOver.botRight);
        }
      else
        {
          document.querySelector('.button9').innerHTML = 'o';
          lastMove = 0;          
          gameOver.botRight = 0;
          console.log(gameOver.botRight);
        }
    }
    winner();}

function winner()
{
  if (gameOver.topLeft===0 && gameOver.topMid===0 && gameOver.topRight===0 ||    // 1st row
      gameOver.midLeft===0 && gameOver.midMid===0 && gameOver.midRight===0 ||    // 2nd row
      gameOver.botLeft===0 && gameOver.botMid===0 && gameOver.botRight===0 ||    // 3rd row
      gameOver.topLeft===0 && gameOver.midLeft===0 && gameOver.botLeft===0 ||    // 1st col
      gameOver.topMid===0 && gameOver.midMid===0 && gameOver.botMid===0 ||       // 2nd col
      gameOver.topRight===0 && gameOver.midRight===0 && gameOver.botRight===0 || //3rd col
      gameOver.topLeft===0 && gameOver.midMid===0 && gameOver.botRight===0 ||    // for slash
      gameOver.botLeft===0 && gameOver.midMid===0 && gameOver.topRight===0)      // bac slack
  {
    alert('Player 2 Wins');  //player 2 with O as its move
    location.reload();
  }
else if (gameOver.topLeft===1 && gameOver.topMid===1 && gameOver.topRight===1 || // 1st row
         gameOver.midLeft===1 && gameOver.midMid===1 && gameOver.midRight===1 || // 2nd row
         gameOver.botLeft===1 && gameOver.botMid===1 && gameOver.botRight===1 || // 3rd row
         gameOver.topLeft===1 && gameOver.midLeft===1 && gameOver.botLeft===1 || // 1st col
         gameOver.topMid===1 && gameOver.midMid===1 && gameOver.botMid===1 ||    // 2nd col
         gameOver.topRight===1 && gameOver.midRight===1 && gameOver.botRight===1 || //3rd col
         gameOver.topLeft===1 && gameOver.midMid===0 && gameOver.botRight===1 || // for slash
         gameOver.botLeft===1 && gameOver.midMid===1 && gameOver.topRight===1)   // bac slack
  {
    alert('Player 1 Wins');   //player 1 with X as its move
    location.reload();
  }
}

winner();

console.log(gameOver);