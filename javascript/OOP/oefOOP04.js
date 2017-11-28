var scotty = new ShowHond("Scotty", "Schotse terrier", 15, 0);
var beatrice = new ShowHond("Beatrice", "dwergkeeshond", 5, 3);
// showhonden kunnen alles wat gewone honden kunnen:
console.log(scotty.blaf());
// showhonden kunnen meer dan gewone honden:
scotty.paradeer("trappelen");
beatrice.paradeer("trippelen");

console.log(scotty.naam , " heeft al ", scotty.aantalPrijzen, " show(s) gewonnen.");
console.log(beatrice.naam , " heeft al ", beatrice.aantalPrijzen, " show(s) gewonnen.");
scotty.winShow();
console.log("Nu heeft ", scotty.naam , " " , scotty.aantalPrijzen, " show(s) gewonnen.");
console.log("Nu heeft ", beatrice.naam , " " , beatrice.aantalPrijzen, " show(s) gewonnen.");

/*  UITVOER:
waf
Scotty  is bezig met  trappelen
Beatrice  is bezig met  trippelen
Scotty  heeft al  0  show(s) gewonnen.
Beatrice  heeft al  3  show(s) gewonnen.
Nu heeft  Scotty   1  show(s) gewonnen.
Nu heeft  Beatrice   3  show(s) gewonnen.
*/