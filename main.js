// wait for DOM to load before running JS
$(document).ready(function() {
	$('.btn').click(function clearBoard(){
		$('.box').empty();
		$('.box').removeClass('oColor');
		$('.box').removeClass('xColor');
		turn = 1;
		moveCount= 0; 



	});

	var moveCount = 0;
	var playerX = 'x';
	var playerO = 'o'; 
	var turn = 1;
//click to place X or O.. also cannot overwrite
	$('.box').click(function userInput() {
			if($(this).text()=== "") {
				if(turn===1) {
					$(this).text(playerX);
					$(this).addClass('xColor');
					turn =2 ;
				} else if (turn===2) {
					$(this).text(playerO);
					$(this).addClass('oColor');
					turn =1 ;
				}
				moveCount++;
				checkWin();
				console.log(moveCount);
			} else {
				alert('That box is already taken!');
			}
		});


//check for winner
var checkWin = function () {
var topL = $('#1').text();
var topM = $('#2').text();
var topR = $('#3').text();
var midL = $('#4').text();
var midM = $('#5').text();
var midR = $('#6').text();
var botL = $('#7').text();
var botM = $('#8').text();
var botR = $('#9').text();

var xWins = 0;
var oWins = 0; 
/* visualize the board
var board = [[topL, topM, topR], 
			[midL, midM, midR], 
			[botL, botM, botR]];
*/
	var winningCombo= [[topL, topM, topR], //rows
						[midL, midM, midR],
						[botL, botM, botR],
						[topL, midM, botR], //diagonal
						[topR, midM, botL],
						[topL, midL, botL],//columns
						[topM, midM, botM],
						[topR, midR, botR]];
	for ( var i = 0; i< winningCombo.length; i++) { 
		if (winningCombo[i][0] !== "") {
			if (winningCombo[i][0]===winningCombo[i][1] && winningCombo[i][1]===winningCombo[i][2]) {
				if (winningCombo[i][0] === "x") {
					xWins ++;
					alert('we have a winner!! The winner is X');
				}else if (winningCombo[i][0] === "o") {
					oWins ++;
					alert('we have a winnner!! The winner is O');
				}
			}
		}
	}




};

 

//I made variables to display move count, Xwins, and Owins, but did not have enough time to put them into be displayed on the html page. 



 });		 
