'use strict'

var toetsenbord = require('readline-sync');
var verkopers = ["Jan", "Piet", "Joris", "Corneel"];
var omzetTot = [0, 0, 0, 0];

var naam = "";

while (naam != 'einde') {
    naam = toetsenbord.question('Geef de naam van de verkoper (typ <einde> om te stoppen)1 :  ');
    var positie = verkopers.indexOf(naam);

    if (positie == -1) {
        console.log("onbestaande verkoper");
    }
    else {
        var omzet = toetsenbord.question('Geef de omzet van de verkoper:  ');
        omzetTot[positie] += parseFloat(omzet);
    }
}

for (var i = 0; i < verkopers.length; i++) {
    console.log('De omzet van ' + verkopers[i] + ' is: ' + omzetTot[i]);
}
