import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oefnotitieTom',
  templateUrl: './oefnotitieTom.component.html',
  styleUrls: ['./oefnotitieTom.component.css']
})
export class oefnotitieTomComponent implements OnInit {
  notitie: string="";  
  
  ngOnInit() {
  }

  aantalKarakters(): number{
    return (100-this.notitie.length);
  }

  buttonsDisable(): boolean{
    if (this.notitie.length>0){
      return false
    }else{return true}
  }

  Bewaren(): void{
    window.alert("De tekst werd bewaard.");
  }

  Wissen(): void{
    this.notitie="";
  }
}
