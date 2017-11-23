'use strict';

function Auto(merkp, modelp) {
    this.merk = merkp;
    this.model = modelp;
    this.cabrio = false;
    this.bouwjaar = new Date().getFullYear();
    this.gestart = false;
    this.starten = function () {
        this.gestart = true;
        console.log("De motor draait....")
    };
    this.rijden = function (geluid) { 
        if (this.gestart) {
            var tmp=this.gegevens();
            console.log("Ik vertrek met mijn %s",tmp)
            console.log(geluid); } 
        else { console.log("start eerst de motor") } };
    this.gegevens=function(){
            var cabrioMelding=this.cabrio ? "cabrio" : "";
            return cabrioMelding +" "+ this.merk+" "+this.model+" uit "+ this.bouwjaar;
        } 
}

var auto1 = new Auto("BMW", "X6");
console.log(auto1);
console.log("auto1 is een " + auto1.merk + " " + auto1.model);
auto1.rijden();
auto1.starten();
auto1.rijden("broembroem");
console.log(auto1.gegevens());

var auto2 = new Auto ("Audi","A6");
auto2.cabrio=true;
auto2.starten();
auto2.rijden("tuuttuuut");
auto2.kleur="safierzwart";
console.log(auto1);
console.log(auto2);
