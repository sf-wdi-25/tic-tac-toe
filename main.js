// wait for DOM to load before running JS
$(document).ready(function() {
  var i = 1;
  $(".box").click(function() {
  	
  	if(i === 1){
  		k = "X";
  			if ($(this).text() === "") {
  			$(this).text(k);
  			
  			this.disabled = true;
  		
  			i += 1;
  			}else
  		alert("X, make a move elsewhere");
  		
		

  		} else if ($(this).text() === "") {
  			k = "O";
  			$(this).text(k);	
  		
  		i -= 1;
  		} else {
  		alert("O, make a move elsewhere");
  		}
  	

});
});