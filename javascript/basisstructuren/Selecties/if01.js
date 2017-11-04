'use strict';

var datum = new Date();
var uur = datum.getHours();
if (uur < 12) {
	console.log("Goedemorgen");
} else {
	console.log("Goedenamiddag");
}
if (uur != 12) {
	console.log("De middagpauze is niet bezig");
} else {
	console.log("Het is middagpauze");
}
if(uur >=9 && uur <=12){
	console.log("de werkvoormiddag is bezig");
}
if(uur < 9 || uur > 18) {
	console.log("buiten de werkuren");
}