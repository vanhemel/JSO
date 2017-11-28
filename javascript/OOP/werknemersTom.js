'use strict';

function Persoon(naam, voornaam) {
    this.naam = naam;
    this.voornaam = voornaam;
}

Persoon.prototype.volledigeNaam = function () {
    var result = "";
    result += this.voornaam + " ";
    result += this.naam.toUpperCase();
    return result;
}

Persoon.prototype.toString = function () {
    var result=this.volledigeNaam();
    return result;
}

function Werknemer (naam,voornaam,loon){
    Persoon.apply(this, arguments);
    this.loon = loon;
}

Werknemer.prototype = new Persoon ();

Werknemer.prototype.toString=function(){
    return this.volledigeNaam ()+" krijgt een loon van "+this.loon;
}

var persoon1 = new Persoon ("Kapot","Isabel");
console.log (persoon1.volledigeNaam());
console.log (persoon1.toString());

var werknemer1= new Werknemer ("Stok", "Pol", 1234);
console.log (werknemer1.volledigeNaam());
console.log (werknemer1.toString());

var werknemer2= new Werknemer ("Selie", "Peter", 2345);
werknemer2.volledigeNaam=function(){
   return"Met de groeten van "+this.voornaam+" "+this.naam ;
}
console.log (werknemer2.volledigeNaam());
console.log (werknemer2.toString());