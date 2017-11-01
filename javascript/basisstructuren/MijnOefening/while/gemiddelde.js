'use strict';

var getal = 0;
var som = 0;
var teller = 0;
var gemiddelde;

var toetsenbord = require('readline-sync');

var getal = parseInt(toetsenbord.question("Geef geheel getal (<0 om te stoppen): "), 10);
while (getal >= 0) {
    som = som + getal;
    teller=teller+1
    getal = parseInt(toetsenbord.question("Geef geheel getal (<0 om te stoppen): "), 10);
}
gemiddelde=som/teller
console.log("Het gemiddelde is %d", gemiddelde);