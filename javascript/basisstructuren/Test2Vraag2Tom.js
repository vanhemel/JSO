'use strict';
var toetsenbord = require('readline-sync');

var eenheden = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
var tientallen = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
var honderdtallen = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
var duizendtallen = ["", "M", "MM"];

var getal = 1;
var romeins = "";

function controleerGetal() {
    do {
        getal = toetsenbord.question("Geef een jaartal tot 2100 (groter dan 0): ");
        if (isNaN(getal)) {
            console.log("Dit is geen getal.");
        } else if ((getal < 1) || (getal > 2100)) {
            console.log("Dit jaartal ligt buiten het gevraagde bereik.");
        } else {
            return getal;
        }
    } while (isNaN(getal) || (getal < 1) || (getal > 2100));
}
function naarRomeins(jaar) {
    var lengte = jaar.length;
    switch (lengte) {
        case 1:
            romeins += eenheden[jaar.charAt(lengte - 1)];
            break;
        case 2:
            romeins += tientallen[jaar.charAt(lengte - 2)];
            romeins += eenheden[jaar.charAt(lengte - 1)];
            break;
        case 3:
            romeins += honderdtallen[jaar.charAt(lengte - 3)];
            romeins += tientallen[jaar.charAt(lengte - 2)];
            romeins += eenheden[jaar.charAt(lengte - 1)];
            break;
        case 4:
            romeins += duizendtallen[jaar.charAt(lengte - 4)];
            romeins += honderdtallen[jaar.charAt(lengte - 3)];
            romeins += tientallen[jaar.charAt(lengte - 2)];
            romeins += eenheden[jaar.charAt(lengte - 1)];
            break;

    }

}

var jaar = controleerGetal();
naarRomeins(jaar);
console.log(jaar+" is in Romeinse cijfers "+romeins);
