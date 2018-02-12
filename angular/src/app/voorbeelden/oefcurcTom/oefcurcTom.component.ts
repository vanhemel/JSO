import { Component, OnInit } from '@angular/core';
import { currencyServiceTom } from './oefcurcTom.service';



@Component({
  selector: 'vbservice03',
  templateUrl: './oefcurcTom.component.html',
  styleUrls: ['./oefcurcTom.component.css']
})
export class OefcurcTomcomponent implements OnInit {
  rates: string[];
  bedrag: number;
  startval: string;
  resultval: string;
  uitkomst: number = 0;
  currencies: any;

  constructor(private currencyService: currencyServiceTom) { }

  ngOnInit() {
    this.currencyService.getCurrency().subscribe(
      data => {
        //let currencies: any;
        // Object.keys(data["rates"]).forEach(element => {
        //   currencies.push(element);
        //}
        this.currencies = data["rates"];
        this.rates = Object.keys(this.currencies);
        this.rates.push("EUR");
        this.rates.sort();
      });
  }

  converteer(): void {
    if (this.currencies[this.startval] == undefined) {
      this.uitkomst = this.bedrag * this.currencies[this.resultval];
    } 
    else if (this.currencies[this.resultval] == undefined) { 
      this.uitkomst = this.bedrag / this.currencies[this.startval]; 
    }
    else {
      this.uitkomst = (this.bedrag / this.currencies[this.startval]) * this.currencies[this.resultval];
    }
  }

  controle():boolean{
    if(this.currencies[this.startval]==this.currencies[this.resultval] || this.bedrag==0){
      return true;
    }
    else {return false}
  }
}

