'use strict'

var toetsenbord = require('readline-sync');
var verkopers=["Jan","Piet","Joris","Corneel"]; 
var omzetTot=[0,0,0,0]; 

var naam = toetsenbord.question('Geef de naam van de verkoper (typ <einde> om te stoppen) :  ');


while (naam !='einde'){
    var omzet = toetsenbord.question('Geef de omzet van de verkoper:  ');
    switch (naam) {
        case verkopers[0]:
            omzetTot[0] += parseFloat(omzet);
            break;
        case verkopers[1]:
            omzetTot[1] += parseFloat(omzet);
            break;
        case verkopers[2]:
            omzetTot[2] += parseFloat(omzet);
            break;
        case verkopers[3]:
            omzetTot[3] += parseFloat(omzet);
            break;
        default:
            console.log ("Geen geldige invoer.")
            break;
    }
    var naam = toetsenbord.question('Geef de naam van de verkoper (typ <einde> om te stoppen) :  ');
}
    


console.log('De omzet van '+verkopers[0]+' is: '+omzetTot[0]); 
console.log('De omzet van '+verkopers[1]+' is: '+omzetTot[1]);    
console.log('De omzet van '+verkopers[2]+' is: '+omzetTot[2]);
console.log('De omzet van '+verkopers[3]+' is: '+omzetTot[3]); 
