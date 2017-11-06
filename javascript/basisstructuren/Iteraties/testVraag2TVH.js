'use strict';


function mijlenNaarKm(afstand_in_mijlen) {
    var afstand_in_km = afstand_in_mijlen * 0.62137;
    return afstand_in_km;
}

var toetsenbord = require('readline-sync');
var aantalMijlen = parseFloat(toetsenbord.question('Geef de Afstand in mijlen: '));
var resultaat1 = mijlenNaarKm(aantalMijlen);
console.log('De afstand in km is: %s', resultaat1);




function leesEenheid() {
    do {
        var eenheid = toetsenbord.question('Geef de gebruikte eenheid (k, K, m, M): ');
    } while (eenheid != 'k' && eenheid != 'K' && eenheid != 'm' && eenheid != 'M');
    return eenheid;
}

var resultaat2 = leesEenheid();
console.log('De eenheid is', resultaat2);



const TOEGELATENSNELHEID = 50
var overtreding = 0

function boeteBijSnelheidsovertreding(overtreding) {
    var snelheid = parseFloat(toetsenbord.question("Geef de snelheid: "));

    do {
        var eenheid = toetsenbord.question('Geef de gebruikte eenheid (k, K, m, M): ');
    } while (eenheid != 'k' && eenheid != 'K' && eenheid != 'm' && eenheid != 'M');

    if (eenheid == 'm' || eenheid == 'M') {
        var overtreding = ((snelheid /0.62137) - TOEGELATENSNELHEID);
    } else {
        var overtreding = snelheid - TOEGELATENSNELHEID;
    }

    switch (true) {
        case (overtreding <= 0):
            var result = 0;
            break;
        case (overtreding > 0 && overtreding <= 10):
            var result = 50;
            break;
        case (overtreding > 10 && overtreding <= 30):
            var result = 50 + ((overtreding - 10) * 10);
            break;
        case (overtreding > 30):
            var result = "dagvaarding";
            break;
    }
    return result;
}

var resultaat3 = boeteBijSnelheidsovertreding(overtreding);
console.log('De boete is', resultaat3);




var toegelSnel = 0
var overtreding = 0

function boeteBijSnelheidsovertreding2(overtreding, toegelSnel) {
    var snelheid = parseFloat(toetsenbord.question("Geef de snelheid: "));
    var toegelSnel = parseFloat(toetsenbord.question("Geef de toegelaten snelheid in: "));

    do {
    var eenheid = toetsenbord.question('Geef de gebruikte eenheid (k, K, m, M): ');
} while (eenheid != 'k' && eenheid != 'K' && eenheid != 'm' && eenheid != 'M');

if (eenheid == 'm' || eenheid == 'M') {
    var overtreding = (snelheid / mijlenNaarKm(snelheid) - toegelSnel);
} else {
    var overtreding = snelheid - toegelSnel;
}

switch (true) {
    case (overtreding <= 0):
        var result = 0;
        break;
    case (overtreding > 0 && overtreding <= 10):
        var result = 50;
        break;
    case (overtreding > 10 && overtreding <= 30):
        var result = 50 + ((overtreding - 10) * 10);
        break;
    case (overtreding > 30):
        var result = "dagvaarding";
        break;
}
return result;
}


var resultaat4 = boeteBijSnelheidsovertreding2(overtreding);
console.log('De boete is', resultaat4);