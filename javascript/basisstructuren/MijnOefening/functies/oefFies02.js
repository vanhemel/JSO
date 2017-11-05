'use strict';

var resultaat

function celsius(x){
    var result
   result=5.0/9.0*(x-32)
return result
}

function fahrenheit(x){
    var result
   result=9.0/5.0*x+32
return result
}

var toetsenbord = require('readline-sync');
var cel = parseFloat(toetsenbord.question('Geef de temperatuur in Celsius: '));
resultaat= celsius(cel);
console.log('De temperatuur in Fahrenheit is : %s',resultaat);

var far = parseFloat(toetsenbord.question('Geef de temperatuur in Fahrenheit: '));
resultaat= fahrenheit(far);
console.log('De temperatuur in Celsius is: %s',resultaat);
