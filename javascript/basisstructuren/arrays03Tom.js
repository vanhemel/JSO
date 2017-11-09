'use strict'
var bestemmingen1=["de zee","het strand","de kust"]; 
var bestemmingen2=[]; 

//1e poging
for (var i = 0; i < bestemmingen1.length; i++) {
    bestemmingen2[i]=bestemmingen1[i]
}
bestemmingen1[0]="Hoboken";
console.log(bestemmingen1);
console.log(bestemmingen2);

//2e poging
bestemmingen2=bestemmingen1.slice();

bestemmingen1[0]="Antwerpen";
console.log(bestemmingen1);
console.log(bestemmingen2);