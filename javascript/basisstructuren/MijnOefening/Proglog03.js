'use strict';

var toetsenbord = require('readline-sync');

var naam = toetsenbord.question('Geef de naam van de bank:  ');
var saldo = parseFloat(toetsenbord.question('Geef het saldo van de rekening:  '));

if (naam.toUpperCase() == "KAUPTHING") {
    if (saldo <= 20000) {
        console.log('%s geeft %s EUR terug.' ,naam,saldo);    
    } else {
        console.log('%s geeft maar 20000 EUR terug.' ,naam); 
    }
     
} else {
       console.log('%s geeft %s EUR terug.' ,naam,saldo);
}
