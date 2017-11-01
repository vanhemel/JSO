'use strict';

var toetsenbord = require('readline-sync');

var naam = toetsenbord.question('Geef de naam van de bank:  ');
var saldo = parseFloat(toetsenbord.question('Geef het saldo van de rekening:  '));
const RENTEBEDRAG = 0.4

if (naam.toUpperCase() == "KAUPTHING") {
    console.log('U kunt voorlopig uw geld ( %s EUR) niet opvragen' ,saldo);   
} else {
    var rente = (saldo*4)/100 
    var totaalbedrag = saldo + rente

    console.log('Bij %s bedraagt het rentbedrag %s EUR. Het totaalbedrag is %s' ,naam,RENTEBEDRAG,totaalbedrag);
}
