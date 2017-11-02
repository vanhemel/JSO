'use strict'

var toetsenbord = require('readline-sync');

var zin = toetsenbord.question('Geef een zin:  ');
var result = '';

for (var teller = 0; teller < zin.length; teller++) {
    if (zin.charAt(teller) !=',') {
        var karakter=zin.charAt(teller);
        result=result+karakter;
    }
    else{
        var karakter=zin.charAt(teller);
        result=result+karakter+' ';
    }
}



console.log(result)

