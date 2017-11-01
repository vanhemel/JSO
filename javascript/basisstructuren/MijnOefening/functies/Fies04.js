'use strict'

var toetsenbord = require('readline-sync');
var jaartal = parseInt(toetsenbord.question("Geef een jaartal: "), 10);

function TestSchrik(jaartal) {
    var s
    if (jaartal % 4 != 0) {
        s = 'Nee1'
    }
    else if(jaartal % 400 == 0){
        s = 'Ja1'
    }
    else if (jaartal % 100 == 0 ) {
        s= 'Nee3'
    } else {
        s='Ja2'        
    }
return s
}


var schrikkeljaar = TestSchrik(jaartal);
console.log(schrikkeljaar);

