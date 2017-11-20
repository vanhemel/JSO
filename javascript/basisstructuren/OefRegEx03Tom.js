var toetsenbord = require('readline-sync');
var zin, i;
var result = "";
zin = toetsenbord.question("Geef een zin: ");

function antwerps() {
    result = zin.replace(/h/g,"");
    return result;
}

function limburgs() {
    result = zin.replace(/([aeiou])/g,"$1$1");
    return result;
}

var resultaat1 = antwerps(zin);
console.log(resultaat1);

var resultaat2 = limburgs(zin);
console.log(resultaat2);