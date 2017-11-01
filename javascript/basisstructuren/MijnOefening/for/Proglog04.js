'use strict';

var toetsenbord = require('readline-sync');

var getal = parseInt(toetsenbord.question('Geef een getal:  '));

for (var teller=1; teller <= getal; teller++){  
    var spatie =""; 
    for (var i=1; i < teller; i++) {
        spatie += " ";
       
    }
    console.log("%s",spatie+"*");
}