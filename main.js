// wait for DOM to load before running JS
console.log("Sanity Check = Eez Alive");
$(window).ready( function ( event ) {
  
  // your code here
$('.btn').on("click", function handleClick() {
	$('.box').empty();
});

var count = 0;
$('.box').click(function userInput() {
     if (count % 2 === 0) {
     	$(this).html('<img src=http://i.imgur.com/tbtS98N.png>');

     } else {
		$(this).html('<img src="http://i.imgur.com/17mhzBU.png">');     	
     }
     count++;
 });

$('.box').click(function userInput() {
     
 });
});


//Noah's original code, that I tweaked to make work (shifting between X's and O's with each click)
// var count = 0;
// $(".box").click(function() {
// 	if (count % 2 === 0) {
// 		$(this).text("X");

// 	} else if (count % 2 !== 0){
// 		$(this).text("O");
// 	}
// count++;
// });

