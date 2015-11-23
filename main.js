// wait for DOM to load before running JS
$(document).ready(function(){

///text here
function checkWinner() {
    if ($(".top .X").length === 3 || $(".middle .X").length === 3 || $(".bottom .X").length === 3 || $(".diaTopLR.X").length === 3 || $(".diaBottomLR.X").length === 3) {
        alert();
    }
}

var blanks = $(".blank");
var numberOfBoxClicks = 0;
var reset = $("#reset");

function getWinner() {
    if ($(".top .X").length === 3 || $(".middle .X").length === 3 || $(".bottom .X").length === 3 || $(".diaTopLR.X").length === 3 || $(".diaBottomLR.X").length === 3 || $(".left.X").length === 3 || $(".center.X").length === 3 || $(".right.X").length === 3) {
        alert("X is the winner!");
        return true;
    } else if ($(".top .O").length === 3 || $(".middle .O").length === 3 || $(".bottom .O").length === 3 || $(".diaTopLR.O").length === 3 || $(".diaBottomLR.O").length === 3 || $(".left.O").length === 3 || $(".center.O").length === 3 || $(".right.O").length === 3) {
        alert("O is the winner!");
        return true;
    } else{
        return false;
    }
}

blanks.click(function() {
    if ((this).disabled === true) {
        return;
    } else{
        (this).disabled = true;
        numberOfBoxClicks ++;
        if (numberOfBoxClicks % 2 === 0) {
        $(this).addClass("O");
        getWinner();
        if (getWinner() === true) {
            location.reload(true);
        } else {
            alert("X plays next");
        }
    } else{
        $(this).addClass("X");
        getWinner();
        if (getWinner() === true) {
            location.reload(true);
        } else {
            alert("O plays next");
        }
    }
	}
});

reset.click(function() {
    location.reload(true);
});

});