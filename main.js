// wait for DOM to load before running JS
$(document).ready(function(){
  
  var xOrO = 1;
  var moveCount = 0;
  var xWins = 0;
  var oWins = 0;

  function checkForWinner() {
    var combos = [[$("#top-left").text(), $("#top-middle").text(), $("#top-right").text()],
        [$("#center-left").text(), $("#center-middle").text(), $("#center-right").text()],
        [$("#bottom-left").text(), $("#bottom-middle").text(), $("#bottom-right").text()],
        [$("#top-left").text(), $("#center-left").text(), $("#bottom-left").text()],
        [$("#top-middle").text(), $("#center-middle").text(), $("#bottom-middle").text()],
        [$("#top-right").text(), $("#center-right").text(), $("#bottom-right").text()],
        [$("#top-left").text(), $("#center-middle").text(), $("#bottom-right").text()],
        [$("#bottom-left").text(), $("#center-middle").text(), $("#top-right").text()]];
    for (var i = 0; i < combos.length; i++) {
      if (combos[i][0] !== "") {
        if (combos[i][0] === combos[i][1] && combos[i][1] === combos[i][2]) {
          if (combos[i][0] === "X") {
            xWins ++;
            $(".x-wins").text(xWins);
            alert("X wins!");
          } else {
            oWins ++;
            $(".o-wins").text(oWins);
            alert("O wins!");
          }
          moveCount = 0;
          $(".box").empty();
          return;
        }
      }
    }
  }

  $(".box").on("click", function playTicTacToe() {
    if ($(this).text() === "") {
      if (xOrO % 2 === 0) {
        $(this).html("<span class='O'>O</span>");
        moveCount ++;
        xOrO++;
        $("#move").text("X");
      } else {
        $(this).html("<span class='X'>X</span>");
        moveCount ++;
        xOrO++;
        $("#move").text("O");
      }
      if (moveCount === 9) {
        moveCount === 0;
        alert("Cat's game! Reset the board!");
      } else if (moveCount >= 5) {
        checkForWinner();
      }
    } else {
      alert("This cell is already taken. Please select an empty cell.");
    } 
  });
  
  $("button").click(function resetHandler() {
    $(".box").empty();
  });
});