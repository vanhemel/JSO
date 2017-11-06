'use strict';

var lengte = 0
var hoogte = 0

function maakString(lengte, karakter = ' ') {
    var result = ''
    for (var i = 0; i < lengte; i++) {
        result += karakter;
    }
    return result;
}
var resultaat1 = maakString(5, 'A')
console.log(resultaat1);


function tekenGetallenPiramide(hoogte) {
    var result = "";
    for (var i = 1; i <= hoogte; i++) {
        result += maakString(hoogte - i);
        result += maakString(i * 2 - 1, i)
        result += "\n";
    }
    return result;
}
var resultaat2 = tekenGetallenPiramide(5)
console.log(resultaat2);