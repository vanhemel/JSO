'use strict';

var toetsenbord = require('readline-sync');

var rij1 = [1, 2, 3, 4];
var rij2 = [0, 0, 0, 0];
var rij3 = [2, 4, 6, 8];
var rij4 = [5, 5, 5, 5];
var rechthoek = [rij1, rij2, rij3, rij4];


function controleVierkant(tabel) {
    var rij, kol;
    var aantalrij = 0, aantaltot = 0;
    for (rij = 0; rij < tabel.length; rij++) {
        aantalrij++
        for (kol = 0; kol < tabel[rij].length; kol++) {
            aantaltot++
        }
    }
    if ((aantalrij * aantalrij) == aantaltot) {
        var result = true;
    } else {
        var result = false;
    }
    console.log(aantalrij);
    console.log(aantaltot);
    return result
}

console.log(controleVierkant(rechthoek));

function leesTweeDimTabel(tabel) {
    var rij, kol;
    for (rij = 0; rij < tabel.length; rij++) {
        for (kol = 0; kol < tabel[rij].length; kol++) {
            tabel[rij][kol] = parseInt(toetsenbord.question("Geef een geheel getal: "));
        }
    }
}

(leesTweeDimTabel(rechthoek));
console.log(rechthoek);

function somRij(tabel) {
    var result = 0;
    tabel.length;
    for (var teller = 0; teller < tabel.length; teller++) {
        result += [teller][0];
    }
    return result;
}

function somKol(tabel) {
    var result = 0;
    tabel.length;
    for (var teller = 0; teller < tabel.length; teller++) {
        result += [0][teller];
    }
    return result;
}

function somDiag(tabel) {
    var result = 0;
    tabel.length;
    for (var teller = 0; teller < tabel.length; teller++) {
        result += [teller][teller];
    }
    return result;
}

function magischVierkant(tabel) {
    var rij, kol;
    var getal1 = som(tabel)
    while (getal1 != getal2) {
        var getal2 = som(tabel)
    }
}


    (magischVierkant(rechthoek));
