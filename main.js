// wait for DOM to load before running JS
$(document).ready(function() {

	var marker = "X";

	function switchMarker() {
		if (marker === "X") {
    	marker = "O";
    } else {
    	marker = "X";
			}
	}

	function switchMessage() {
		$("p").text("It is player " + marker + "'s turn");
	}

  function isThereWinner() {
    if (($(".box").eq(0).text() === marker) && ($(".box").eq(1).text() === marker) && (($(".box").eq(2).text() === marker))) {
      return true;
      } else if (($(".box").eq(3).text() === marker) && ($(".box").eq(4).text() === marker) && (($(".box").eq(5).text() === marker))) {
          return true;
        } else if (($(".box").eq(6).text() === marker) && ($(".box").eq(7).text() === marker) && (($(".box").eq(8).text() === marker))) {
            return true;
          } else if (($(".box").eq(0).text() === marker) && ($(".box").eq(3).text() === marker) && (($(".box").eq(6).text() === marker))) {
              return true;
            } else if (($(".box").eq(1).text() === marker) && ($(".box").eq(4).text() === marker) && (($(".box").eq(7).text() === marker))) {
                return true;
              } else if (($(".box").eq(2).text() === marker) && ($(".box").eq(5).text() === marker) && (($(".box").eq(8).text() === marker))) {
                  return true;
                } else if (($(".box").eq(0).text() === marker) && ($(".box").eq(4).text() === marker) && (($(".box").eq(8).text() === marker))) {
                    return true;
                  } else if (($(".box").eq(2).text() === marker) && ($(".box").eq(4).text() === marker) && (($(".box").eq(6).text() === marker))) {
                      return true;
                    }
  }

  function reset() {
    $("div.col-xs-4").text("");
    marker = "X";
  }

  $("div.col-xs-4").on("click", function makeMove(event) {
    if ($(this).text() === "X" || $(this).text() === "O") {
    	return;
  	}
    $(this).text(marker);
    if ($(this).text() === "O") {
      $(this).css("color", "blue");
    } else if ($(this).text() === "X") {
        $(this).css("color", "red");
      }
    if (isThereWinner()) {
      alert("Winner is player " + marker);
      reset();
    } else {
        switchMarker();
        switchMessage();
      }
	});

	$("button").on("click", function resetBoard(event) {
    $("div.col-xs-4").text("");
    marker = "X";
  });
});