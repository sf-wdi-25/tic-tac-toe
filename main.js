// wait for DOM to load before running JS
console.log("Sanity Check = Eez Alive");
$(window).ready( function ( event ) {
  
  // your code here
$('.btn').on("click", function handleClick() {
	$('.box').empty();
});


$('.box').click(function userInput() {
     $(this).html('<img src=http://i.imgur.com/tbtS98N.png>');
 });

$('.box').click(function userInput() {
     $(this).html('<img src="http://i.imgur.com/17mhzBU.png">');
 });

});