console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	var player = 0;
	$(".box").click(function drawX() {
		if ($(this).html() === "") {
			if (player%2===0) {
				($(this).html("<img src='img1.png'>"));
			} else {
				($(this).html("<img src='img2.png'>"));
			}
			player ++;
		}
	});
	$("button").click(function reset() {
		$(".box").text("");
	});
	$("button").mouseover(function changeHoverColor(){
		$(this).css("background-color", "darkgoldenrod");
	});

});