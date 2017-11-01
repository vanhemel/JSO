'use strict';

var toetsenbord = require('readline-sync');

var getal = parseInt(toetsenbord.question('Geef een getal:  '));
console.log("*")
for (var teller=1; teller <= getal-2; teller++){  
    var spatie ="";
    var sterTot ="***"
    var ster ="*"
    for (var tmp=1; tmp < teller; tmp++) {
        spatie += " ";
        sterTot +="*";
    }
    console.log("%s%s%s",ster,spatie,ster); 
}
console.log("%s",sterTot);