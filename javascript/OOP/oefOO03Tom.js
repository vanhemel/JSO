'use strict';
var toetsenbord = require('readline-sync');

function TankBeurten(inhoud, afstand) {
	this.inhoud = inhoud;
    this.afstand = afstand;
}


var tankbeurten = new Array(5);
for (var i = 0; i < tankbeurten.length; i++) {
    var inhoud = parseInt(toetsenbord.question("Geef het aan hoeveel liter je hebt getankt: "));
    var afstand = parseInt(toetsenbord.question("Geef aan hoe ver je bent gereden met deze tank: "));
   tankbeurten[i] = new TankBeurten(inhoud, afstand);    
}
console.log(tankbeurten);


