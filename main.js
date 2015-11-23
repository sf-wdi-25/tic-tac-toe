// wait for DOM to load before running JS


window.addEventListener('DOMContentLoaded', function() {


  // I did not use a reset
  var $board = $('#board'),
      $boxes = $('.box'),
      $reset = $('#reset');
  
  // player X always goes first
  var turn = "X";

  // keep track of moves count
  var moves = 0;
  
  // I had this in suedo 
  var changeTurn = function() {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  };

  // I created a reset button
  var resetBoard = function() {
    $boxes.text("");
    $boxes.removeClass("X").removeClass("O");

    // player X always goes first
    turn = "X";
    
    // reset moves count
    moves = 0;
  };

  // did not know this
  var allThree = function(player, box1, box2, box3) {
    return (box1.innerText === player) && (box2.innerText === player) && (box3.innerText === player);
  };

  // I had this part
  var winsDiagonal = function(player) {
    return allThree(player, $boxes[0], $boxes[4], $boxes[8]) ||
           allThree(player, $boxes[2], $boxes[4], $boxes[6]);
  };

  // I had this part
  var winsColumn = function(player) {
    return allThree(player, $boxes[0], $boxes[3], $boxes[6]) ||
           allThree(player, $boxes[1], $boxes[4], $boxes[7]) ||
           allThree(player, $boxes[2], $boxes[5], $boxes[8]);
  };

  // I had this part
  var winsRow = function(player) {
    return allThree(player, $boxes[0], $boxes[1], $boxes[2]) ||
           allThree(player, $boxes[3], $boxes[4], $boxes[5]) ||
           allThree(player, $boxes[6], $boxes[7], $boxes[8]);
  };

  // I had this
  var winnerIs = function(player) {
    return winsRow(player) || winsColumn(player) || winsDiagonal(player);
  };

  // I had this
  var getWinner = function() {
    if (winnerIs("X")) {
      return "X";
    }
    else if (winnerIs("O")) {
      return "O";
    }
    else {
      return null;
    }
  };

  // I didn't know how to write this
  $boxes.on('click', function() {
    // only allow move if box is blank
    if ($(this).text() === "") {
      $(this).text(turn);
      $(this).addClass(turn);
      moves += 1;
      
      // check for a winner if 5 or more moves have been played
      if (moves >= 5) {
        var winner = getWinner();
    
        // I can write alerts
        if (winner) {
          alert("Player " + winner + " won!");
          resetBoard();
        } else {
          changeTurn();
        }
      } else {
        changeTurn();
      }
    }
  });



    $("button").click(function handleClick(event){
	$("div.box").text("");

});
  


}); 


  // listen for clicks on `reset` button to reset the board
 //$reset.on('click', function () {
 //   resetBoard();






/*
$("#1").click(function handleClick(event){
 var selectedSquare = $(this).text();    
alert(selectedSquare + " was clicked");
});


$("button").click(function handleClick(event){
	$("div.box").text("");

});
*/


 