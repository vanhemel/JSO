'use strict'

var toetsenbord = require('readline-sync');

var zin = toetsenbord.question('Geef een zin:  ');
var result1 = '';
var result2 = '';

function naarAntwerps(zin) {
    for (var teller = 0; teller < zin.length; teller++) {
        var karakter = zin.charAt(teller);
        if (karakter != 'h') {
            result1 = result1 + karakter;
        }
        else {
            var karakter = '';
            result1 = result1 + karakter;
        }
    }
    return result1
}

function naarLimburgs(zin) {
    for (var teller = 0; teller < zin.length; teller++) {
        var karakter = zin.charAt(teller);
        if (karakter !='a' && karakter !='e' && karakter!='u' && karakter!='i' && karakter!='o') {
            result2 = result2 + karakter;
        }
        else {
            karakter= karakter+karakter;
            result2 = result2 + karakter;
        }
    }
    return result2
}

var resultaat1 = naarAntwerps(zin);
console.log(resultaat1);

var resultaat2 = naarLimburgs(zin);
console.log(resultaat2);