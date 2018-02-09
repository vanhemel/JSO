export class Broodje {
    private naam: string;
    public prijs: number;
    constructor(naam: string, prijs: number) {
        this.naam = naam;
        this.prijs = prijs;
    }
}

export class BestelLijn {
    public broodje: Broodje;
    public aantal: number;
    constructor(broodje: Broodje, aantal: number) {
        this.broodje = broodje;
        this.aantal = aantal;
    }
}   

export class Bestelling {
    private bestellijnen: BestelLijn[];
    constructor(bestellijnen: BestelLijn[]) {
        this.bestellijnen = bestellijnen;
    }
}   
