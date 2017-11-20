var toetsenbord = require('readline-sync');
var zin, i;
var result = "";
zin = toetsenbord.question("Geef een zin: ");

function kommas() {
    result = zin.replace(/,/g, ", ");
    return result;
}

var resultaat = kommas(zin);
console.log(resultaat);
