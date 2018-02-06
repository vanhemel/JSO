/* abstract method */

abstract class Figuur {
    constructor(public kleur: string, public soort: string) { }
    abstract get omtrek(); 
    abstract get oppervlakte(); 
}

class Cirkel extends Figuur {
    constructor(kleur:string, public straal: number) {super(kleur, "Cirkel")}
    get omtrek(){
        let result= (2*this.straal)*Math.PI;
        return result;
        //return this.omtrek;
    }
    
    get oppervlakte(){
        let result= (this.straal*this.straal)*Math.PI;
        return result;
    }
}

class Rechthoek extends Figuur {
    constructor(kleur:string, public lengte: number, public breedte:number) {super(kleur, "Rechthoek")}
    get omtrek(){
        let result= (2*this.lengte)+(2*this.breedte);
        return result;
    }
    get oppervlakte(){
        let result= this.lengte*this.breedte;
        return result;
    }
}

let figuren: Figuur[] = new Array<Figuur>();
figuren.push(new Cirkel("rood", 10));
figuren.push(new Rechthoek("blauw", 2, 3));
figuren.push(new Rechthoek("groen", 4, 5));
figuren.push(new Cirkel("geel", 1.5));
for(let figuur of figuren){
    console.log("een %s met eigenschappen: ", figuur.soort);
    console.log("\tkleur: %s\tomtrek: %s\toppervlakte: %s", figuur.kleur, 
        figuur.omtrek, figuur.oppervlakte);
}
