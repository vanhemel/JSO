'use strict'

var toetsenbord = require('readline-sync');

var zin = toetsenbord.question('Geef een zin:  ');
var result1 = 'p';

function pigLatin(zin) {
    for (var teller = 0; teller < zin.length; teller++) {
        if (zin.charAt(teller) == ' ') {
            if ((zin.charAt(teller + 1) == 'p')||(zin.charAt(teller + 1) == 'P')) {
                result1 = result1 + zin.charAt(teller);
            } else {
                result1 = result1 + zin.charAt(teller) + "p";
            }

        }
        else {
            result1 = result1 + zin.charAt(teller);
        }
    }
    return result1
}

var resultaat = pigLatin(zin);
console.log(resultaat);
