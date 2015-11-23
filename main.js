// wait for DOM to load before running JS
$(document).ready(function(){
  //This variable determins the next move that will be made.
  var xOrO = 1;
  //This is used to determine when the checkForWinner() function will be run, and for when a cat's game should be determined.
  var moveCount = 0;
  var xWins = 0;
  var oWins = 0;
  //Hide the reset button at the start. It should only show up once we reach the end of a set.
  $(".reset").hide();

  function checkForWinner() {
    // This is a list of the possible solutions, spelled out as follows:
    //[[TL, TM, TR],
    // [CL, CM, CR].
    // [BL, BM, BR],
    // [TL, CL, BL],
    // [TM, CM, BM],
    // [TR, CR, BR],
    // [TL, CM, BR],
    // [BL, CM, TR]]
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
            //If all of the previous conditions are true, this checks who the winner is.
            $(".x-wins").text(xWins);
            if (xWins < 3) {
              alert("X wins!");
            } else if (xWins === 3) {
              $(".clear").hide();
              $(".reset").show();
              alert("X wins the set.");
              return;
            }
          } else {
            oWins ++;
            $(".o-wins").text(oWins);
            if (oWins < 3) {
              alert("O wins!");
            } else if (oWins === 3) {
              $(".clear").hide();
              $(".reset").show();
              alert("O wins the set.");
              return;
            }
          }
          moveCount = 0;
          $(".box").empty();
          return;
        }
      }
    }
  }

  $(".box").click(function playTicTacToe() {
    if ($(this).text() === "") {
      if (xOrO % 2 === 0) {
        $(this).html("<span class='O'>O</span>");
        $("#move").text("X");
      } else {
        $(this).html("<span class='X'>X</span>");
        $("#move").text("O");
      }
      moveCount ++;
      xOrO ++;
      if (moveCount >= 5) {
        checkForWinner();
      }
      if (moveCount === 9) {
        alert("Cat's game! Resetting the board!");
        $(".box").empty();
        moveCount = 0;
      }
    } else {
      return;
    } 
  });
  
  $(".clear").click(function clearHandler() {
    $(".box").empty();
    moveCount = 0;
  });

  $(".reset").click(function emptyHandler() {
    $(".box").empty();
    moveCount = 0;
    xWins = 0;
    oWins = 0;
    $(".o-wins").text(oWins);
    $(".x-wins").text(xWins);
    $(".clear").show();
    $(".reset").hide();
  });
});