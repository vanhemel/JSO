import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class currencyServiceTom {
     getCurrency():Observable<any> {
        return this.http.get<any>("https://api.fixer.io/latest");
     }
     constructor(private http: HttpClient) {
     }
}