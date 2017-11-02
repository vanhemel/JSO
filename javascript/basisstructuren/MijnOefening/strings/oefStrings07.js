'use strict'

var toetsenbord = require('readline-sync');

var zin = toetsenbord.question('Geef een zin:  ');

function aantalWoorden(zin) {
    for (var teller = 0; teller < zin.length; teller++) {
        var aantalW=1
        var karakter = zin.charAt(teller);
        if (karakter == ' ') {
            aantalW++
        }
        else {
        }
    }
    return aantalW
}

var resultaat = aantalWoorden(zin);
console.log(resultaat);
