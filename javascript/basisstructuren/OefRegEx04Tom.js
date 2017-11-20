var toetsenbord = require('readline-sync');
var rrn, i;
var result;
rrn = toetsenbord.question("Geef een rijksregisternummer: ");

function rijksreg() {
    var regexp = new RegExp("\\d{6}-\\d{3}-\\d{2}");
    if( regexp.test(rrn)){
        result="Dit is een geldig rijksregisternummer."
    }
    else{
        result="Dit is GEEN geldig rijksregisternummer."}
    return result;
}


var resultaat = rijksreg(rrn);
console.log(resultaat);