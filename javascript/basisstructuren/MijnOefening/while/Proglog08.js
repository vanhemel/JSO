'use strict';

var toetsenbord = require('readline-sync');
const STARTGELD =100;
var uitgave = 0;
var waarde = 0;
var aandelenTot=0;
var startPrijs=3.75;

while (uitgave < STARTGELD) {
    var aandelen = parseFloat(toetsenbord.question('Geef het aantal fortis aandelen dat je wil kopen:'));
    var aankoop=aandelen*startPrijs;
    uitgave += aankoop;
    aandelenTot += aandelen;
    waarde = aandelenTot*startPrijs;
    startPrijs -=0.10;
    console.log('U heeft al gekocht voor %s EUR.',uitgave);
    console.log('De huidige waarde van uw aandelen %s EUR.',waarde);   
}
console.log('Uw geld is op.');
