import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Observable => wijzigingen aan observable worden gemeld aan subscribers

// Injectable => client moet object niet zelf maken
@Injectable()
export class currencyServiceTom {
     getCurrency():Observable<currencies[]> {
        return this.http.get<currencies[]>("https://api.fixer.io/latest");
     }
     constructor(private http: HttpClient) {
     }
}