'use strict'

var toetsenbord = require('readline-sync');

var voornaam = toetsenbord.question('Geef de voornaam:  ');
var naam = toetsenbord.question('Geef de achternaam:  ');
var naam1 = ''
var aantalWNaam = aantalWoorden(naam);

function aantalWoorden(naam) {
    for (var teller = 0; teller < zin.length; teller++) {
        var karakter = zin.charAt(teller);
        if (karakter == ' ') {
            aantalW++
        }
        else {
        }
    }
    return aantalW
}



function belgischeNaam(naam, voornaam) {
    var result1 = naam + ", " + voornaam;
}
return result1
}

function nederlandseNaam(naam, voornaam) {
    if (aantalWNaam = 1) {
        var result2 = naam + ", " + voornaam;
    }
    else if(aantalWNaam = 2){
        for (var teller = 0; teller < zin.length; teller++) {
            var karakter = zin.charAt(teller);
            if (karakter != 'g' && karakter !='h') {
                result = result + karakter;
            }
    }
        
    return result2
}
}


var resultaat1 = naarAntwerps(zin);
console.log(resultaat1);

var resultaat2 = naarLimburgs(zin);
console.log(resultaat2);