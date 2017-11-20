var toetsenbord = require('readline-sync');
var iban, i;
var result;
iban = toetsenbord.question("Geef een IBANnummer (BExx xxxx xxxx xxxx): ");

function ibanControle() {
    var regexp = new RegExp("BE\\d{2} \\d{4} \\d{4} \\d{4}");
    if (!(regexp.test(iban))) {
        result = "Dit is GEEN geldig IBANnummer.";
    }
    else {
        var tienCijfersString = (iban.substr(5, 4) + iban.substr(10, 4) + iban.substr(15, 2));
        var tienCijfers = parseInt(tienCijfersString);
        var controleGetalString = iban.substr(17, 2);
        var controleGetal = parseInt(controleGetalString);
        if ((tienCijfers % 97 == 0) && (controleGetal != 97)) {
            result = "Dit is GEEN geldig IBANnummer.";
        } else if (tienCijfers % 97 != controleGetal) {
            result = "Dit is GEEN geldig IBANnummer.";
        } else {
            result = "Dit is een geldig IBANnummer.";
        }
    }
    return result;
}

var resultaat = ibanControle(iban);
console.log(resultaat);