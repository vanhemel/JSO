import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'vbhttp',
  templateUrl: './oefhttpTom.component.html',
  styleUrls: ['./oefhttpTom.component.css']
})
export class oefhttpTomComponent implements OnInit {
  customers: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(
      data => {
        this.customers = data as any[];
      },
      error => {
        console.log("Er is iets fout gelopen tijdens het opvragen van de gegevens.");
        console.log(error.message);
      });
  }

}
