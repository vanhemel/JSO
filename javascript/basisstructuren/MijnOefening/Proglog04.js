'use strict';

var toetsenbord = require('readline-sync');

var getal = parseInt(toetsenbord.question('Geef een getal:  '));

for (var teller=1; teller <= getal; teller++){  
    var spatie =""; 
    for (var tmp=1; tmp < teller; tmp++) {
        spatie += " ";
       
    }
    console.log("%s",spatie+"*");
}