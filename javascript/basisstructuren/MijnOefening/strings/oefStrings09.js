'use strict'

var toetsenbord = require('readline-sync');

var rijksRN = toetsenbord.question('Geef het rijksregisternummer (xxxxxx-xxx-xx:  ');

function geslachtControleren(rijksRN) {
    var getal=rijksRN.substring(7,10);
    if(((getal) % 2) == 0){
        var result ='vrouw';
    }
    else {
        var result ='man';
    }
    return result ;
}

var geslacht=geslachtControleren(rijksRN);
console.log(geslacht)


function leeftijdBerekenen(rijksRN) {
    var jaarRijks=rijksRN.substring(0,1);
    var d=new Date();
    var jaar=d.substring(0,1);
    return (jaar-jaarRijks) ;
}

var leeftijd=leeftijdBerekenen(rijksRN);
console.log(leeftijd)
