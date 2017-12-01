var products = [{ name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
{ name: "Orange", calories: 160, color: "orange", sold: 12101 },
{ name: "Cola", calories: 210, color: "caramel", sold: 25412 },
{ name: "Diet Cola", calories: 15, color: "caramel", sold: 43922 },
{ name: "Lemon", calories: 200, color: "clear", sold: 14983 },
{ name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
{ name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
{ name: "Water", calories: 0, color: "clear", sold: 62123 }
];

function compareSold(sodaA, sodaB) {
    if (sodaA.sold < sodaB.sold) {
        return -1;
    }
    if (sodaA.sold > sodaB.sold) {
        return 1;
    }
    return 0;
}
function printProducts(){
for (i = 0; i < products.length; i++) {
    console.log (products[i] )
}
}
console.log("Sorteren op verkocht");
products.sort(compareSold);
printProducts(products);


function compareName(sodaA, sodaB) {
    if (sodaA.name < sodaB.name) {
        return -1;
    }
    if (sodaA.name > sodaB.name) {
        return 1;
    }
    return 0;
}
function printProducts(){
for (i = 0; i < products.length; i++) {
    console.log (products[i] )
}
}
console.log("Sorteren op naam");
products.sort(compareName);
printProducts(products);


function compareCal(sodaA, sodaB) {
    if (sodaA.calories < sodaB.calories) {
        return -1;
    }
    if (sodaA.calories > sodaB.calories) {
        return 1;
    }
    return 0;
}
function printProducts(){
for (i = 0; i < products.length; i++) {
    console.log (products[i] )
}
}
console.log("Sorteren op calorien");
products.sort(compareCal);
printProducts(products);


function compareCol(sodaA, sodaB) {
    if (sodaA.color < sodaB.color) {
        return -1;
    }
    if (sodaA.color > sodaB.color) {
        return 1;
    }
    return 0;
}
function printProducts(){
for (i = 0; i < products.length; i++) {
    console.log (products[i] )
}
}
console.log("Sorteren op kleur");
products.sort(compareCol);
printProducts(products);

function compareName(sodaA, sodaB) {
    if (sodaA.name > sodaB.name) {
        return -1;
    }
    if (sodaA.name < sodaB.name) {
        return 1;
    }
    return 0;
}
function printProducts(){
for (i = 0; i < products.length; i++) {
    console.log (products[i] )
}
}
console.log("Sorteren op naam omgekeerd");
products.sort(compareName);
printProducts(products);