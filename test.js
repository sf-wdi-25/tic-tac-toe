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
			checkO_Win();
			count++;
			$(".page-header").text("Go X");
			
		}
	});

//working RESET button
	$("button").on("click", function() {
		$(".box").text(" ");
		});
});



var winsX = 0;
function winRamificationsX() {
	alert("X wins!");
	$(".box").text(" ");
	winsX ++;
	$("#winsX").text(winsX);
}

var winsO = 0;
function winRamificationsO() {
	alert("O wins!");
	$(".box").text(" ");
	winsO ++;
	$("#winsO").text(winsO);
}


//Check X Win conditions

function checkX_Win(){
	if ($(".top").text() === ("XXX")) {
		winRamificationsX();
	} else if ($(".middle").text() === ("XXX")) {
		winRamificationsX();
	} else if ($(".bottom").text() === ("XXX")) {
		winRamificationsX();
	} else if ($(".left").text() === ("XXX")) {
		winRamificationsX();
	} else if ($(".center").text() === ("XXX")) {
		winRamificationsX();
	} else if ($(".right").text() === ("XXX")) {
		winRamificationsX();
	} else if ($(".diagonal1").text() === ("XXX")) {
		winRamificationsX();
	} else if ($(".diagonal2").text() === ("XXX")) {
		winRamificationsX();
	}
}

//Check O win conditions

function checkO_Win(){
	if ($(".top").text() === ("OOO")) {
		winRamificationsO();
	} else if ($(".middle").text() === ("OOO")) {
		winRamificationsO();
	} else if ($(".bottom").text() === ("OOO")) {
		winRamificationsO();
	} else if ($(".left").text() === ("OOO")) {
		winRamificationsO();
	} else if ($(".center").text() === ("OOO")) {
		winRamificationsO();
	} else if ($(".right").text() === ("OOO")) {
		winRamificationsO();
	} else if ($(".diagonal1").text() === ("OOO")) {
		winRamificationsO();
	} else if ($(".diagonal2").text() === ("OOO")) {
		winRamificationsO();
	}
}