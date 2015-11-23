
$(function() {

// wait for DOM to load before running JS
console.log("Sanity Check: JS is working!");
  
// Importing Tic Tac Toe Grid.
var $board = $('#board');
var $boxes = $('.box');
var $reset = $('.btn');   

// Starting Point
var count = 0;

// Game starts at "X" and changes turns based on the previous turn.
var turn = "X";
var changeTurn = function() {
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}

// Resets the Game.
$reset.click(function clickHandle() {
  	count = 0;
    $boxes.empty();
});


// $boxes[0],$boxes[1],$boxes[2],
// $boxes[3],$boxes[4],$boxes[5],
// $boxes[6],$boxes[7],$boxes[8]

// Checks Player against Boxes to match 3 in a row
var threeInARow = function(player, box1, box2, box3) {
  return (box1.innerText === player) && (box2.innerText === player) && (box3.innerText === player);
}

// Checks all Horizontal Win Possibilites. 
var horizontalWins = function(player){
  return threeInARow(player,$boxes[0],$boxes[1],$boxes[2]) || 
         threeInARow(player,$boxes[3],$boxes[4],$boxes[5]) ||
         threeInARow(player,$boxes[6],$boxes[7],$boxes[8]);
}

// Checks all Vertical Win Possibilites. 
var verticalWins = function(player){
 return threeInARow(player,$boxes[0],$boxes[3],$boxes[6]) || 
        threeInARow(player,$boxes[1],$boxes[4],$boxes[7]) || 
        threeInARow(player,$boxes[2],$boxes[5],$boxes[8]);
}                   

// Checks all Diagonal Win Possibilites. 
var diagonalWins = function(player){
 return threeInARow(player,$boxes[0],$boxes[4],$boxes[8]) ||
        threeInARow(player,$boxes[6],$boxes[4],$boxes[2]);
}

// Gets the Winner from the Possible Outcomes.
var getWinner = function(player) {
  return horizontalWins(player) || verticalWins(player) || diagonalWins(player)
}

// Figures out if the getWinner is "X" or "O".
var declareWinner = function() {
  if (getWinner('X')) {
    return 'X';
  }
  else if (getWinner('O')) {
    return 'O';
  }
  else {
    return null;
  }
};

// Sets the inner text as X or O based on turn.
$boxes.click(function(){
// Prevents a move to overwrite another. 
 if($(this).text() === "") {
    $(this).text(turn);
// Adds class to stylize "X" and "O".    
    $(this).addClass(turn);
// Increase count by 1 per move.
    count++;
    if (count >= 5) {
      var winner = declareWinner();
      if (winner){
        alert(winner + " is the Winner!")
       } else {
          changeTurn();
        }
      } else {
          changeTurn();
        }
  }
});
});












