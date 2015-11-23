// wait for DOM to load before running JS
$(function() {
  
  //I think we're suppose to use the $(document) function here
  //but since we load our JS at the bottom of our html, it's not necessary

});

var count = 0;

$(".box").click(function() {
	/*
	if ($(this).text()===" "){
		if (count % 2 === 0) {
			$(this).text("X");
		}else if (count % 2 !== 0){
			$(this).text("O");
		}
	count++;
	} else {
		//do nothing
	}
	}
	*/

 	if (count % 2 === 0) {
		$(this).text("X");
	}else if (count % 2 !== 0){
		$(this).text("O");
	}
	count++;
});


// Took this code from Nathan on Slack striclybiz
// Originally, tried to take into account if a square was already filled, 
// but didn't get it working

$("button.btn.btn-default").on("click", function(){
	$(".box").text(" ");
});

//Selects all elements with Box class and replaces their content with empty string


// Below Functions to determine winner, based off of Fundamentals Exercise 5.2
// Didn't get a chance to finish it though, still some problems with the code
// I believe it would go something like this though
// Probably a way to account for "O" winning too with some modifications to the code.

/*
function getWinner(){
	if ($("#top_left").text()==="X" && $("#top_center").text()==="X" && $("#top_right").text()==="X" ||
		$("#center_left").text()==="X" && $("#center_center").text()==="X" && $("#center_right").text()==="X" ||
		$("#bottom_left").text()==="X" && $("#bottom_center").text()==="X" && $("#bottom_right").text()==="X" ||){
		console.log("X has won!");
	}
}
*/