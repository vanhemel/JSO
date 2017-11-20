var toetsenbord = require('readline-sync');
var rrn, i;
var result;
rrn = toetsenbord.question("Geef een rijksregisternummer (yymmdd-xxx-xx): ");

function rijksreg() {
    var regexp = new RegExp("\\d{6}-\\d{3}-\\d{2}");
    if (regexp.test(rrn)) {
        result = "Dit is een geldig rijksregisternummer."
    }
    else {
        result = "Dit is GEEN geldig rijksregisternummer."
    }
    return result;
}

function rrndatum() {
    var regexp = new RegExp("\\d{2}((0[1-9])|(1[0-2]))((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))-\\d{3}-\\d{2}");
    if (regexp.test(rrn)) {
        result = "Dit is een geldig rijksregisternummer."
    }
    else {
        result = "Dit is GEEN geldig rijksregisternummer."
    }
    return result;
}


var resultaat = rrndatum(rrn);
console.log(resultaat);