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
<<<<<<< HEAD


function tekenVierkant(zijde){
    //eerst de rij maken
    for (var rij =1;rij<=zijde; rij++){
        var resultaat="";
        for(var i=1; i<=zijde; i++){
        resultaat +="*";
=======
function tekenVierkant(zijde) {
    var resultaat;
    for (var rij = 1; rij <= zijde; rij++) {
        resultaat = "";
        for (var i = 1; i <= zijde; i++) {
            resultaat += "*";
>>>>>>> 62344867b3559164b1fe169e25032eabfd6d1ac4
        }
        console.log(resultaat);
    }
}
<<<<<<< HEAD
tekenVierkant(4);
=======

tekenVierkant(4);
tekenVierkant(10);
>>>>>>> 62344867b3559164b1fe169e25032eabfd6d1ac4
