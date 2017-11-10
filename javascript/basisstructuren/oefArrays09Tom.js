'use strict'

var toetsenbord = require('readline-sync');
var gordijnen=[60,90,120,150,200];
var breedte = 0, minimum=0;

var breedte = parseInt(toetsenbord.question('Geef de gewenste breedte van het gordijn (in cm):  '));

for(var i=0; i<gordijnen.length ; i++){
    if (breedte > gordijnen[i]) {
        minimum=gordijnen[i+1];
 }
}

console.log('Je kan bij ons gordijnen van '+minimum+' breedt kopen.');