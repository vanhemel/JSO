'use strict';

var toetsenbord = require('readline-sync');
const STARTGELD =100
var uitgave = 0


while (uitgave < STARTGELD) {
    var aandelen = parseFloat(toetsenbord.question('Geef het aantal fortis aandelen dat je wil kopen:'));
    var aankoop=aandelen*3.75
    uitgave += aankoop
    console.log('U heeft al gekocht voor %s EUR.',uitgave);    
}
console.log('Uw geld is op.'); 
