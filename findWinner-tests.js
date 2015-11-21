($("#top-left").text() === $("#top-middle").text()) && ($("#top-middle").text() === $("#top-middle").text()) ||
($("#center-left").text() === $("#center-middle").text()) && ($("#center-middle").text() === $("#center-right").text()) ||
($("#bottom-left").text() === $("#bottom-middle").text()) && ($("#bottom-middle").text() === $("#bottom-right").text()) ||
($("#top-left").text() === $("#center-left").text()) && ($("#center-left").text() === $("#bottom-left").text()) ||
($("#top-middle").text() === $("#center-middle").text()) && ($("#center-middle").text() === $("#bottom-middle").text()) ||
($("#top-middle").text() === $("#center-right").text()) && ($("#center-right").text() === $("#bottom-right").text()) ||
($("#top-left").text() === $("#center-middle").text()) && ($("#center-middle").text() === $("#bottom-right").text()) ||
($("#top-middle").text() === $("#center-middle").text()) && ($("#center-middle").text() === $("#bottom-left").text())


var topL.text() = $("#top-left").text();
var $("#top-middle").text() = $("#top-middle").text();
var $("#top-middle").text() = $("#top-right").text();
var $("#center-left").text() = $("#center-left").text();
var $("#center-middle").text() = $("#center-middle").text();
var $("#center-right").text() = $("#center-right").text();
var $("#bottom-left").text() = $("#bottom-left").text();
var $("#bottom-middle").text() = $("#bottom-middle").text();
var $("#bottom-right").text() = $("#bottom-right").text();
if (xCount >= 3) {
	if ($("#top-middle").text()) {
		if (($("#top-left").text() === $("top-middle").text() && $("top-middle").text() === $("top-right").text()) || ($("#top-middle").text() === $("#center-right").text() && $("#center-right").text() === $("#bottom-right").text())) {
			alert("X wins!");
		}
	} else if ($("#center-middle").text()) {
		if (($("#center-left").text() === $("#center-middle").text() && $("#center-middle").text() === $("#center-right").text()) || ($("#top-middle").text() === $("#center-middle").text() && $("#center-middle").text() === $("#bottom-middle").text()) || ($("#top-left").text() === $("#center-middle").text() && $("#center-middle").text() === $("#bottom-right").text())) {
			alert("X wins!");
		}
	} else if ($("#bottom-left").text()) {
		if (($("#bottom-left").text() === $("#center-left").text() && $("#center-left").text() === $("#top-left").text()) || ($("#bottom-left").text() === $("#bottom-middle").text() && $("#bottom-middle").text() === $("#bottom-right").text()) || ($("#bottom-left").text() === $("#center-middle").text() && $("#center-middle").text() === $("#top-middle").text())) {
			alert("X wins!");
		}
	}
}