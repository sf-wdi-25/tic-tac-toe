// wait for DOM to load before running JS
$(document).ready(function(){
  
  var i = 1;
  var xCount = 0;
  var xWins = 0;
  var oCount = 0;
  var oWins = 0;
  $(".box").on("click", function playTicTacToe() {
    if ($(this).text() === "") {
      if (i % 2 === 0) {
        $(this).html("<span class='O'>O</span>");
        oCount ++;
        i++;
      } else {
        $(this).html("<span class='X'>X</span>");
        xCount ++;
        i++;
      }
    } else {
      alert("This cell is already taken. Please select an empty cell.");
    } 
  });

});