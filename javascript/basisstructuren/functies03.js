'use strict';

// een functie zonder expliciete return
function tekenHuisje(){
    console.log("   *");
    console.log("  * *");
    console.log(" *   *");
    console.log("*******");
    console.log("*     *");
    console.log("*     *");
    console.log("*******");
    // hier staat impliciet    return undefined;
}

tekenHuisje();

// klassikale oef.:
// schrijf een functie om een vierkant met doorgegeven
// zijde te tekenen


function tekenVierkant(zijde){
    //eerst de rij maken
    for (var rij =1;rij<=zijde; rij++){
        var resultaat="";
        for(var i=1; i<=zijde; i++){
        resultaat +="*";
        }
        console.log(resultaat);
    }
}
tekenVierkant(4);