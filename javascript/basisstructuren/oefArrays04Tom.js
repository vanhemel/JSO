var toetsenbord = require('readline-sync');
var lijst = new Array(5);
var getal = 0, aantal = 0, positie = 0;
var controle=false;


while (lijst[4] == undefined) {
    getal = toetsenbord.question("Geef een getal: ");
        if (lijst.indexOf(getal) >=0) {
            console.log("Dit getal werd reeds ingevoerd.");
        }
        else { lijst[positie++] = getal
                }
    }
   
console.log(lijst);