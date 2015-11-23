
var oldClick = 0;

function changeToX(box) {
   var thisBox = box;
   $("#" + thisBox).text('X');
   thisBox = "";
}

function changeToO(box) {
   var thisBox = box;
   $("#" + thisBox).text('O');
   thisBox = "";
}

function evalClickTime(newClick, specificBox) {
  if(newClick - oldClick > 0 && newClick - oldClick < 2000) {
     console.log('registered your timely second click');
     console.log((newClick - oldClick));
     changeToO(specificBox);  
  } else {
     console.log('one click');
     console.log((newClick - oldClick));
     changeToX(specificBox);
  }
 oldClick = newClick;
} 

$('.box').bind("click", function youClicked (event) { 
//get the timestamp
var click = Date.now();
//get the box id 
var boxId = event.toElement.id;
evalClickTime(click, boxId);
getCells(); 
//evaluate the cell patterns
var endGame = evalCells();
    if(endGame) {
      //get winner 
      //display winner
      //reset the game
    }


})

var cellValues = [[,,],[,,],[,,]];

function getCells() {
   var cells = [["#top-left", "#top-mid", "#top-right"], ["#mid-left", "#mid-mid", "#mid-right"], ["#bot-left", "#bot-mid", "#bot-right"]];
     for(var i = 0; i < 3; i++) {
         for(j = 0; j < 3; j++) {
            var cellVal = $(cells[i][j]).text();
            cellValues[i][j] = cellVal;
         }
     }
}

function evalCells(cellValues) {
  //rows
  if(cellValues[0][0] === cellValues[0][1] && cellValues[0][1] === cellValues[0][2]) {
    return true; 
  } else if(cellValues[1][0] === cellValues[1][1] && cellValues[1][1] === cellValues[1][2]) {
    return true; 
  } else if(cellValues[2][0] === cellValues[2][1] && cellValues[2][1] === cellValues[2][2]) {
    return true;
  //columns
  } else if(cellValues[0][0] === cellValues[1][0] && cellValues[1][0] === cellValues[2][0]) {
    return true;
  } else if(cellValues[0][1] === cellValues[1][1] && cellValues[1][1] === cellValues[2][1]) {
    return true;
  } else if(cellValues[0][2] === cellValues[1][2] && cellValues[1][2] === cellValues[2][2]) {
    return true; 
  //diagonal
  } else if(cellValues[0][1] === cellValues[1][1] && cellValues[1][1] === cellValues[2][2]) {
    return true;
  } else if(cellValues[0][0] === cellValues[1][1] && cellValues[1][1] === cellValues[0][2]) {
    return true;
  } else {
    return false; 

    $(document).ready(function(){
  }

});
}










