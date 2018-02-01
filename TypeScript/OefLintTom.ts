class Lint {
    constructor(public kleur: string, public lengte: number) {
        this.kleur = kleur;
        this.lengte = lengte;   
    }
    knippen(lintDeel: number, aantalDelen:number =1): void{
        if (this.lengte > lintDeel*aantalDelen ) {
            this.lengte -= lintDeel*aantalDelen;
        } else {
            throw new Error ("Het lint is te kort.")
        }
    }
    AantalUitLint(lintDeel: number): number{
        return (Math.floor(this.lengte / lintDeel));
    }
}

let lint1 = new Lint("rood",20);
console.log (lint1);
console.log (lint1.AantalUitLint(3));
lint1.knippen(3,6);
console.log (lint1);