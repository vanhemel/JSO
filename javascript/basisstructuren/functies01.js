'use strict';

var toetsenbord = require('readline-sync');
var getal = toetsenbord.question('Tik een getal in: ');

// wat doet onderstaand script?
var resultaat = 1;
for (var i = 2; i <= getal; i++) {
    resultaat *= i;
}

console.log(resultaat);

//funtiedefinite/-declaratie: zelf een functie maken
function faculteit(x){
    var result=1;
    for(var j=2;j<=x;j++){
        result *=j;
    }
    return result;
}

//functie oproepen:
resultaat=faculteit (getal);
console.log(resultaat);
console.log (faculteit(4));