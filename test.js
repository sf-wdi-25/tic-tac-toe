// wait for DOM to load before running JS
$(document).ready(function(){
//TRAVIS SAYS THE FOLLOWING SOLUTION IS NO GOOD!!! It's logging x's and o's
//each time, but it overlays it, so it could potentilly work anyways,
//but isn't a good solution.

	var count = 0;
	$(".box").click(function() {
		if (count % 2 === 0  && $(this).text() !== ("X") && $(this).text() !== ("O")) {
			$(this).text("X");
			$(this).css({"color": "blue", "font-size": "80px"});
			checkX_Win();
			count++;
			$(".page-header").text("Go O");
			

		} else if (count % 2 !== 0 && $(this).text() !== ("X") && $(this).text() !== ("O")) {
			$(this).text("O");
			$(this).css({"color": "red", "font-size": "80px"});
			count++;
			$(".page-header").text("Go X");
			
		}
	});

//working RESET button
	$("button").on("click", function() {
		$(".box").text(" ");
		});
});


//Check X Win conditions

function checkX_Win(){
	if ($(".top").text() === ("XXX")) {
		alert("X wins!");
	} else if ($(".middle").text() === ("XXX")) {
		alert("X wins!");
	} else if ($(".bottom").text() === ("XXX")) {
		alert("X wins!");
	} else if ($(".left").text() === ("XXX")) {
		alert("X wins!");
	} else if ($(".center").text() === ("XXX")) {
		alert("X wins!");
	} else if ($(".right").text() === ("XXX")) {
		alert("X wins!");
	} else if ($(".diagonal1").text() === ("XXX")) {
		alert("X wins!");
	} else if ($(".diagonal2").text() === ("XXX")) {
		alert("X wins!");
	}
}
