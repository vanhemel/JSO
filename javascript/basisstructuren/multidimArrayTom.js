'use strict';

var toetsenbord = require('readline-sync');

var aantalVakken = 3, vak;
var puntenTabel = new Array(aantalVakken);

function leesTweeDimTabel(tabel, hoofding) {
    var rij, kol;
    for (rij = 0; rij < tabel.length; rij++) {
        for (kol = 0; kol < tabel[rij].length; kol++) {
            tabel[rij][kol] = parseInt(toetsenbord.question(hoofding + (rij + 1) + "(" + (kol + 1) + ") "));
        }
    }
}

function toonTweeDimTabel(tabel, hoofding) {
    var rij, kol, result = hoofding;
    for (rij = 0; rij < tabel.length; rij++) {
        result += "\n";
        for (kol = 0; kol < tabel[rij].length; kol++) {
            result += "\t" + tabel[rij][kol];
        }
    }
    console.log(result);
}

function maximum1(tabel) {
    var rij, kol, result;
    var lijst=[]
    for (rij = 0; rij < tabel.length; rij++) {
        for (kol = 0; kol < tabel[rij].length; kol++) {
            lijst.push(tabel[rij][kol]);
        }   
    }
    var result = Math.max(...lijst);
    return result;
}

function maximum2(tabel) {
    var rij, kol, result=0;
    for (rij = 0; rij < tabel.length; rij++) {
        for (kol = 0; kol < tabel[rij].length; kol++) {
           if(result < tabel[rij][kol]) {
               result = tabel[rij][kol];
           }
        }   
    }
    return result;
}


/****** HOOFDPROGRAMMA ******/
// allocatie van kolommen van tabel
for (vak = 0; vak < aantalVakken; vak++) {
    puntenTabel[vak] = new Array(5);
}

leesTweeDimTabel(puntenTabel, "Geef punten voor vak ");
toonTweeDimTabel(puntenTabel, "Behaalde punten");

/* oefening: */
console.log("Het maximum = %d", maximum1(puntenTabel));
console.log("Het maximum = %d", maximum2(puntenTabel));