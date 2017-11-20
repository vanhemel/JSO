var toetsenbord = require('readline-sync');
var iban, i;
var result1;
var result2;
var result;
iban = toetsenbord.question("Geef een IBANnummer (BExx xxxx xxxx xxxx): ");

function ibanControle1() {
    var regexp = new RegExp("BE\\d{2} \\d{4} \\d{4} \\d{4}");
    if (!(regexp.test(iban))) {
        result1 = false;
    }
    else {
        var tienCijfersString = (iban.substr(5, 4) + iban.substr(10, 4) + iban.substr(15, 2));
        var tienCijfers = parseInt(tienCijfersString);
        var controleGetalString = iban.substr(17, 2);
        var controleGetal = parseInt(controleGetalString);
        if ((tienCijfers % 97 == 0) && (controleGetal != 97)) {
            result1 = false;
        } else if (tienCijfers % 97 != controleGetal) {
            result1 = false;
        } else {
            result1 = true;
        }
    }
    return result1;
}

function ibanControle2() {
    var identificatienummerString = (iban.substr(5, 4) + iban.substr(10, 4) + iban.substr(15, 4));
    var temp1 = identificatienummerString + "1114000;";
    var temp2 = parseInt(temp1);
    var rest1 = temp2%97;
    var rest2 = rest1-98;
    var controleNummerString = iban.substr(2, 2);
    var controleNummer = parseInt(controleNummerString);
    if (rest2==controleNummer) {
        result2=true;
    } else {
        result2=false;
    }
    return result2;
}

function ibanControle(res1,res2){
    if (res1 && res2) {
        result = "Dit is een geldig IBANnummer.";
    } else {
        result = "Dit is GEEN geldig IBANnummer.";
    }
    return result;
}

var resultaat1=ibanControle1(iban);
var resultaat2=ibanControle2(iban);
var resultaat = ibanControle(resultaat1,resultaat2);
console.log(resultaat);