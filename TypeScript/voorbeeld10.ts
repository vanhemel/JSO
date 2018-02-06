/* subklasse */
/* */

class Persoon{
    constructor(public voornaam: string, public naam: string){
    }
}

/* elke student IS EEN persoon */
/* en erft alle velden en methodes van basisklasse Persoon */
/* INHERITANCE (OVERERVING) */
class Student extends Persoon{
    opleiding: string;
    protected studentnr: string = "NN";  // protected => toegankelijk in deze klasse en
    // in de subklassen
}

class ErasmusStudent extends Student{
    wijzigStudentNr(nieuwNr: string): void{
        this.studentnr = nieuwNr;  
    }
}

class Docent extends Persoon{
    private loon: number = 5000;
    verhoogLoon(bedrag: number){
        this.loon += bedrag;
    }
}

let student = new Student("Jos", "Vermeulen");
student.voornaam += "ke";   // Student erft voornaam van Persoon
student.opleiding = "informatica";
console.log(student);
// student.studentnr = "123";  // compileerfout; want studentnr is protected

let chloe: ErasmusStudent = new ErasmusStudent("Chloe", "Claes");
chloe.opleiding = "FEO";
chloe.voornaam = "Chloé";
console.log(chloe);

let docent: Docent = new Docent("Prof", "Gobelijn");
docent.verhoogLoon(100000);
// docent.opleiding = "blabla";  // compileerfout; want Docent heeft geen veld opleiding
console.log(docent);
