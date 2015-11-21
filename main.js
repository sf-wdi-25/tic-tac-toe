// wait for DOM to load before running JS
$(function() {

	// your code here

	var players = ["x", "o"];
	/*var tacs = {
		"x": $('<i class="fa fa-facebook-official"></i>'),
		"o": $('<i class="fa fa-twitter"></i>')
	};*/

	//player objects
	var tacs = {

		//key  hash value
		"x": $('<span>x</span>'),
		"o": $('<span>o</span>')
	};
	//setting turns equal to zero
	var turn = 0;

	//initializing a multi-dimensional array with id selectors to manipulate dom elements
	var domGrid = [
		[$("#a"), $("#b"), $("#c")],
		[$("#d"), $("#e"), $("#f")],
		[$("#g"), $("#h"), $("#i")]
	];

	//the game grid itself is a multi-dimensional array to fill the dom elements within.
	var gameGrid = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	];

	function update(e) {
		var clickX = 0;
		var clickY = 0;

		//traversing through arrays
		for(var y = 0; y < domGrid.length; y++) {
			for(var x = 0; x < domGrid[y].length; x++) {
				var coordBox = domGrid[y][x];
				if(e.target == coordBox[0]) {
					clickX = x;
					clickY = y;
				}
			}
		}

		// prevent players overwriting each others moves

		gameGrid[clickY][clickX] = turn+1;
		domGrid[clickY][clickX].html($(tacs[players[turn]]).clone());

		// after changes possibly take place, try to detect win scenario
		// e.g. 3 in a row in any direction

		if(turn == 0) turn = 1;
		else turn = 0;
	}

	$("div.box").on('click', update);

	

});