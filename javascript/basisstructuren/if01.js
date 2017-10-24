'use strict';

var datum = new Date();
var uur = datum.getHours();
if (uur >= 12)
	console.log("Goedemorgen");
console.log("iets anders");

if (uur != 12) {
	console.log("de middagpauze is niet bezig");
}
else {
	console.log("het is middagpauze");
}

if (uur >= 9 && uur <= 12) {
	console.log("de werkvoormiddag is bezig");
}

if (uur < 9 || uur > 18) {
	console.log("buiten de werkuren");
}