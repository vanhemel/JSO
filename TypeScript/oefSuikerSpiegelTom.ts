
class SuikerSpiegel {
    private datum: Date;
    private bloedwaarden: number[];
    constructor(dag: number, maand: number, jaar: number) {
        this.bloedwaarden = new Array<number>(4);
        this.datum = new Date(jaar, maand - 1, dag);
    }

    waardeIngeven(metingNr: number, waarde: number): void {
        this.bloedwaarden[metingNr] = waarde;
    }

    aantalHypos(): number {
        let hypos = 0;
        let bloedw=this.bloedwaarden;
        for (let i=0; i<bloedw.length; i++){
            if(bloedw[i]<60){
            hypos +=1;}
        }
        return hypos;
    }

    aantalHypers(): number {
        let hyper = 0;
        let bloedw=this.bloedwaarden;
        for (let i=0; i<bloedw.length; i++){
            if(bloedw[i]>250){
            hyper +=1;}
        }
        return hyper;
    }

}

let suiker = new SuikerSpiegel(26, 3, 2017);
suiker.waardeIngeven(0, 50);
suiker.waardeIngeven(1, 280);
suiker.waardeIngeven(2, 120);
suiker.waardeIngeven(3, 100);

console.log(suiker);

console.log(suiker.aantalHypos());