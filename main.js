// wait for DOM to load before running JS
console.log("Loaded!");
$(function() {

  // var turn will track either X or O
  var turn = "o";
  var useX = '<i class="fa fa-times fa-5x"></i>';
  var useO = '<i class="fa fa-circle-o fa-5x"></i>';

  // lisener when Box clicked
  $("div.box").on("click", function handleClick() {
    var thisBox = $(this);
    if(!thisBox.html()) {
      if(turn === "o") {
        thisBox.append(useO);
        thisBox.css("color", "lightblue");
        winnerSet();
        turn = "x"; // set ture to opponent
        whosTurn();
      } else {
        thisBox.append(useX);
        thisBox.css("color", "pink")
        winnerSet();
        turn = "o";
        whosTurn();
      }
    }
  })

  // reset button
  $('.reset').on("click", function handleButton() {
    reset();
  })

  // reset function
  function reset() {
    $('div.box').text("");
    whosTurn();
  }

  // display who's turn
  function whosTurn() {
    $('.turn-box').text("It's " + turn.toUpperCase() + " turn.")
  }

  // check if there's a winner
  function winnerSet() {
    var xWin = '.fa-times';
    var oWin = '.fa-circle-o';
    var faSet;
    if (turn === "x") {
      faSet = xWin;
    } else {
      faSet = oWin;
    }
    var a = !!$('#a ' + faSet)[0];
    var b = !!$('#b ' + faSet)[0];
    var c = !!$('#c ' + faSet)[0];
    var d = !!$('#d ' + faSet)[0];
    var e = !!$('#e ' + faSet)[0];
    var f = !!$('#f ' + faSet)[0];
    var g = !!$('#g ' + faSet)[0];
    var h = !!$('#h ' + faSet)[0];
    var i = !!$('#i ' + faSet)[0];
    if( a && b &&  c) {
      greetWinner();
    } else if( d && e && f) {
      greetWinner();
    } else if( g && h && i) {
      greetWinner();
    } else if( a && d && g) {
      greetWinner();
    } else if( b && e && h) {
      greetWinner();
    } else if( c && f && i) {
      greetWinner();
    } else if( a && e && i) {
      greetWinner();
    } else if( c && e && g) {
      greetWinner();
    }

  }

  // greet the winner and reset
  function greetWinner() {
    alert(turn.toUpperCase() + " is the winner!!");
    reset();
  }

});
