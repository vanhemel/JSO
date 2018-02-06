/* abstract method */
class Figuur {
    constructor(kleur, soort) {
        this.kleur = kleur;
        this.soort = soort;
    }
}
class Cirkel extends Figuur {
    constructor(kleur, straal) {
        super(kleur, "Cirkel");
        this.straal = straal;
    }
    get omtrek() {
        let result = (2 * this.straal) * Math.PI;
        return result;
        //return this.omtrek;
    }
    get oppervlakte() {
        let result = (this.straal * this.straal) * Math.PI;
        return result;
    }
}
class Rechthoek extends Figuur {
    constructor(kleur, lengte, breedte) {
        super(kleur, "Rechthoek");
        this.lengte = lengte;
        this.breedte = breedte;
    }
    get omtrek() {
        let result = (2 * this.lengte) + (2 * this.breedte);
        return result;
    }
    get oppervlakte() {
        let result = this.lengte * this.breedte;
        return result;
    }
}
let figuren = new Array();
figuren.push(new Cirkel("rood", 10));
figuren.push(new Rechthoek("blauw", 2, 3));
figuren.push(new Rechthoek("groen", 4, 5));
figuren.push(new Cirkel("geel", 1.5));
for (let figuur of figuren) {
    console.log("een %s met eigenschappen: ", figuur.soort);
    console.log("\tkleur: %s\tomtrek: %s\toppervlakte: %s", figuur.kleur, figuur.omtrek, figuur.oppervlakte);
}
