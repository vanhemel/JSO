
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
var juisteAntwoorden = 0;
for (var j = 1; j <= 10; j++) {
    var getal1 = geefGetal(bovengrens);
    var getal2 = geefGetal(bovengrens);
    console.log(getal1);
    console.log(getal2);

    var product = parseInt(toetsenbord.question("Wat is het product: "), 10);

    var antwoord = evalueerProduct(getal1, getal2, product);
    console.log(antwoord);

    var evaluatie = toonMeldingBijUitkomst(antwoord);
    console.log(evaluatie);
    console.log()

    if (evaluatie == 'juist') {
        juisteAntwoorden++;
    }
}

console.log(juisteAntwoorden)

function toonMeldingBijTotaal(juisteAntwoorden) {
    switch (true) {
        case juisteAntwoorden < 5:
            k='Onvoldoende';
            break;
        case juisteAntwoorden == 5 || juisteAntwoorden == 6:
            k='Nog veel oefenen!';
            break;
        case juisteAntwoorden == 7:
            k='OK';
            break;
        case juisteAntwoorden == 8:
            k='Een goede score.';
            break;
        case juisteAntwoorden == 9:
            k='Heel goed!';
            break;
        case juisteAntwoorden == 10:
            k='Proficiat! Uitstekend!';
            break;
    }
    return k
}

var tekst = toonMeldingBijTotaal(juisteAntwoorden);
console.log(tekst);