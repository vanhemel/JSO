'use strict';
var mijnAuto = { 
    make: "Fiat",
    model: "500",
    bouwjaar: 1957, 
    color: "Medium Blue",
    cabrio: true,
    drive: function() {
            console.log("Zoom zoom!");
    },
    gegevens:function(){
        var cabrioMelding=this.cabrio ? "cabrio" : "";
        return cabrioMelding +" "+ this.make+" "+this.model+" uit "+ this.bouwjaar;
    }
};
var tmp = mijnAuto.gegevens(); 
console.log(tmp);
