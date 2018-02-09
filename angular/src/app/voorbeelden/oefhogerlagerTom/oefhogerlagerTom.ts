export class Hogerlager {
    public teRaden: number;
    public aantalBeurten: number;
    public geraden: boolean;
    constructor() {
        this.reset();
    }

    verwerkGok(gok: number): string {
        if (gok < this.teRaden) {
            this.aantalBeurten += 1
            return 'Te Laag'
        } else if (gok > this.teRaden) {
            this.aantalBeurten += 1
            return 'Te hoog'
        } else {
            this.aantalBeurten += 1
            return 'goed geraden!'
        }
        ;
    }

    reset(): void {
        this.teRaden = Math.floor((Math.random() * 100) + 1);
        this.aantalBeurten = 0;
        this.geraden = false;
    }
}


