'use strict'

var toetsenbord = require('readline-sync');

var woord = toetsenbord.question('Geef een palindroom:  ');

for (var teller = 0; teller < woord.length; teller++) {
    var karakter1 = woord.charAt(teller);
    var karakter2 = woord.charAt(woord.length-(teller+1));
    if (karakter1 == karakter2) {
        var controle = 'true';
    }
    else {
         var controle = 'false';
    }
}
    if (controle=='true') {
        console.log('dit is idd een palindroom')
    }
    else {
        console.log('dit is geen palindroom')
    }