// wait for DOM to load before running JS
$(document).ready(function(){

	var choice = "";
	var count = 0;
	
	$('p').text("It is player X's turn")

	$('.box').on("click", function youClicked(event) {
		if($(this).text() === "") {
			if(count % 2 === 0) {
				choice = "X"
				$('p').text("It is player O's turn")
				$(this).css('color', 'orange');
			} else {
				choice = "O"
				$('p').text("It is player X's turn")
				$(this).css('color', 'darkgreen');
			}
			$(this).text(choice);
			count = count + 1;
			console.log(count);
		}
	});

	$('#reset').on("click", function clear(event) {
		$('.box').text("");
		count = 0;
	})
})