var toetsenbord = require('readline-sync');
var zin, i;
var result = "";
zin = toetsenbord.question("Geef een zin: ");

function witruimte() {
    result = zin.replace(/\s+/g," ");
    return result;
}

var resultaat = witruimte(zin);
console.log(resultaat);
