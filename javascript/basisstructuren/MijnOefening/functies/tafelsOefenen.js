
var toetsenbord = require('readline-sync');
var bovengrens = 0;
var toetsenbord = require('readline-sync');
var bovengrens = parseInt(toetsenbord.question("Geef de bovengrens: "), 10);

function geefGetal(bovengrens) {

    getal = Math.random();
    getal *= bovengrens;
    getal = Math.floor(1 + getal);
    return getal
}

var getal1 = geefGetal(bovengrens);
var getal2 = geefGetal(bovengrens);
console.log(getal1);
console.log(getal2);

var product = parseInt(toetsenbord.question("Wat is het product: "), 10);

function evalueerProduct(getal1, getal2, product) {
    var controle
    if (getal1 * getal2 == product) {
        controle = true;
    }
    else {
        controle = false;
    }
    return controle
}

var antwoord = evalueerProduct(getal1, getal2, product);
console.log(antwoord);

function toonMeldingBijUitkomst(antwoord) {
    var evaluatie
    if (antwoord == true) {
        i = 'juist';
    }
    else {
        i = 'fout';
    }
    return i
}

var evaluatie = toonMeldingBijUitkomst(antwoord);
console.log(evaluatie);
