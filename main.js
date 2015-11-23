// wait for DOM to load before running JS
$(function)() {
  var count = 0;
$(".box").click(function() {
	if (count % 2 === 0) {
		$(this).text("X");
	} else if (count % 2 !== 0){
		$(this).text("O");
	}
count++;
});
});