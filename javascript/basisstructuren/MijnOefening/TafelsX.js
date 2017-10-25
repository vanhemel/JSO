'use strict';
var product

for (var factor=1; factor <= 5;factor++){
for (var teller=1; teller <=10;teller++){
    var product=teller*factor
    console.log("%s x %s = %s",teller,factor,product);
}
factor++ //voor de uitbreiding: om ervoor te zorgen dat enkel de oneven nummers worden getoond
console.log();
}