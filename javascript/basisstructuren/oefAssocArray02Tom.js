'use strict';

var toetsenbord = require('readline-sync');

var lijstGemeentes = new Array();
var gemeente=null;
var postcode;

while (gemeente !="stop") {
    gemeente = toetsenbord.question("Geef een gemeente: ");
    if (gemeente=="stop") {
        break;
    }if(lijstGemeentes[gemeente] != null) {
        postcode= lijstGemeentes[gemeente] ;
        console.log("De postcode van %s is: %s.", gemeente, postcode);
    }
    else{
        postcode = toetsenbord.question("Geef de postcode van deze gemeente: ");
        lijstGemeentes[gemeente]=postcode;
    }
} 

for (gemeente in lijstGemeentes) { 
    postcode=lijstGemeentes[gemeente];
    console.log("De postcode van %s is: %s.", gemeente, postcode);
}