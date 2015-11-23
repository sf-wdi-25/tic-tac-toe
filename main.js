// wait for DOM to load before running JS
console.log("This is working");
$(function() {

  var turn = "o";

  $("div.box").on("click", function boxClick() {
    draw($(this));
  })

  function draw(obj) {
    var useX = '<p>X</p>';
    var useO = '<p>O</p>';
    if(!obj.text()) {
      if(turn === "o") {
        obj.append(useO);
        turn = "x";
        whosTurn();
      } else {
        obj.append(useX);
        turn = "o";
        whosTurn();
      }
    }
  }

  $('.btn-primary').on("click", function handleButton() {
    $('div.box').text("");
    turn = "o";

  })

  function whosTurn() {
    $('.turn-box').text("It's " + turn.toUpperCase() + " turn.")
    console.log("working");
  }
/*
  function whoWon () {
    
  }
  winner ===  ["div#a","div#b","div#c"],
              ["div#d","div#e","div#f"],
              ["div#g","div#h","div#i"],
              ["div#a","div#d","div#g"],
              ["div#b","div#e","div#h"],
              ["div#c","div#f","div#i"],
              ["div#a","div#e","div#i"],
              ["div#c","div#e","div#g"],
*/
});