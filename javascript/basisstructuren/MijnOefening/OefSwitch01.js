'use strict';

var toetsenbord = require('readline-sync');
var punten = toetsenbord.question('Geef de behaalde punten:  ');

punten= parseInt(punten)

switch (true) {
    case (punten<10):
        console.log("onvoldoende");
        break;
    case (punten <=10) && (punten <14):
        console.log("voldoende");
        break;
    case (punten <=14) && (punten <16):
        console.log("onderscheiding");
        break;
    case (punten <=16) && (punten <18):
        console.log("grote onderscheiding");
        break;  
    case (punten>=18):
        console.log("grootste onderscheiding");
        break;  
    default:
        console.log("ongeldige score.");
}