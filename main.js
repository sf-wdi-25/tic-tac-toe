// wait for DOM to load before running JS
$(function() {

	// Global Declorations

	var players = ["x", "o"];
	/*var tacs = {
		"x": $('<i class="fa fa-facebook-official"></i>'),
		"o": $('<i class="fa fa-twitter"></i>')
	};*/

	var tacs = {
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

	function detectWin() {
		// based on the gameGrid data,
		// detect a win
		for (var y = 0; y < gameGrid.length; y++) {
			for(var x = 0; x < gameGrid[y].length; x++) {
				/*


				*/

			}
		}
	}

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
		// update(remove(e.this));

		// if spot not taken...
		if(gameGrid[clickY][clickX] == 0) {
			// update game data and DOM to match
			gameGrid[clickY][clickX] = turn+1;
			domGrid[clickY][clickX].html($(tacs[players[turn]]).clone());
			if(turn == 0){
				turn = 1;
			} else { 
				turn = 0;
			}
		} else {
			// otherwise, spot was taken and nothing happens
			console.log("that spot is taken!");
			alert("This spot is TAKEN LMAO")
		}

		// after changes possibly take place, try to detect win scenario
		// e.g. 3 in a row in any direction
		detectWin();
		
	}

	$('.btn').click(function clearBox(){
		//setting the data back to zero in the array
		//this goes through the grid and detects the size of the array
		for(var y = 0; y<gameGrid.length; y++){
			for(var x = 0; x<gameGrid[y].length; x++){
				//I set the variable back to zero using x and y as the index detector
				gameGrid[x][y] = 0;
			}
		}
		turn = 0;

		$('.box').empty();
	})
	$("div.box").on('click', update);

});