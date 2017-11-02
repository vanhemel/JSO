'use strict'

var toetsenbord = require('readline-sync');

var zin = toetsenbord.question('Geef een zin:  ');
var result = '';

for (var teller = 0; teller < zin.length; teller++) {
    var karakter = zin.charAt(teller);
    if (karakter != 'g' && karakter !='h') {
        result = result + karakter;
    }
    else {
        if (karakter == 'g') {
            var karakter = 'h';
            result = result + karakter;
        } else {
            var karakter = 'g';
            result = result + karakter;
        }
    }
}



console.log(result)

