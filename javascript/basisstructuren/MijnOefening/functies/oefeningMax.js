'use strict';

var resultaat

function max(x,y){
    var grootste
    if (x>y){
        grootste=x;
    }
    else{
        grootste=y;
    }
return grootste
}

var toetsenbord = require('readline-sync');
var getal1 = parseInt(toetsenbord.question('Tik een eerste getal in: '), 10);
var getal2 = parseInt(toetsenbord.question('Tik een eerste getal in: '), 10);
resultaat=max (getal1,getal2);
console.log('Het grootste getal is: %s',resultaat);