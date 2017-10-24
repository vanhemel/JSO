'use strict';

var gChar
var l25Char
var mj25Teller=0
var mo25Teller=0
var vj25Teller=0
var vo25Teller=0

var toetsenbord = require('readline-sync');

var gChar = toetsenbord.question('Werd het ongeval veroorzaakt door een man of een vrouw (m/v):  ');
//var l25Char = parseInt(toetsenbord.question('Geef de leeftijd van de persoon:  '), 10);

while(gChar=='m' || gChar=='v'){
    var l25Char = parseInt(toetsenbord.question('Geef de leeftijd van de persoon:  '), 10);
    switch (true) {
        case (gChar=='m' && l25Char<25):
            mj25Teller=mj25Teller+1;
            break;
        case (gChar=='m' && l25Char>=25):
            mo25Teller=mo25Teller+1;
            break;
        case (gChar=='v' && l25Char<25):
            vj25Teller=vj25Teller+1;
            break;
        case (gChar=='v' && l25Char>=25):
            vo25Teller=vo25Teller+1;
            break;
    }
    
    var gChar = toetsenbord.question('Werd het ongeval veroorzaakt door een man of een vrouw (m/v):  ');

}

console.log('         <25   >=25');
console.log('mannen:    %s   %s',mj25Teller,mo25Teller)
console.log('vrouwen:   %s   %s',vj25Teller,vo25Teller)
