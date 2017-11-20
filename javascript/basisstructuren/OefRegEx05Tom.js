var toetsenbord = require('readline-sync');
var iban, i;
var result;
iban = toetsenbord.question("Geef een IBANnummer (BExx xxxx xxxx xxxx): ");

function ibanControle() {
    var regexp = new RegExp("BE\\d{2} \\d{4} \\d{4} \\d{4}");
    if (regexp.test(iban)) {
        result = "Dit is een geldig IBANnummer."
    }
    else {
        result = "Dit is GEEN geldig IBANnummer."
    }
    return result;
}




var resultaat = ibanControle(iban);
console.log(resultaat);