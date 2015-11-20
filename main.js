// wait for DOM to load before running JS
$(document).ready(function() {

	var marker = "X";
	
	function changeMarker() {
		if (marker === "X") {
    	marker = "O";
    } else {
    	marker = "X";
			}
	}


  $("div.col-xs-4").on("click", function handleClick(event) {
    if ($(this).text() === "X" || $(this).text() === "O") {
    	return;
  	}
    $(this).text(marker);
    changeMarker();
	});

	$("button").on("click", function handleClick(event) {
    $("div.col-xs-4").text("");
  });
  // your code here
});