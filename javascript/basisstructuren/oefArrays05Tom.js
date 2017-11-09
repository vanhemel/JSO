'use strict'

var toetsenbord = require('readline-sync');
var namenlijst = [];
var minimum = 0;
var naam;

naam = toetsenbord.question('Geef een naam:  ');

while (naam != '') {
    namenlijst.push(naam);
    minimum++;


}  



//If((naam != '') && (minimum < 10))

/*while (minimum < 10) { 
    
    while (naam != '') {
        
        namenlijst.push(naam);
        minimum++;
    }  
}

console.log(namenlijst)
var positie = toetsenbord.question('Geef de gewenste positie:  ');