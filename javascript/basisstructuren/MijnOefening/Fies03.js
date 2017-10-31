'use strict'

function BerekenDis(a,b,c) {
    var dis = (b*b)-4*a*c;
    return dis
}

var discriminant = BerekenDis(5,1,0);
console.log(discriminant);

function BerekenSn(discriminant) {
    var sn
    switch (true) {
        
        case discriminant < 0:
            sn = 0;
            break;
        case discriminant == 0:
            sn = 1;
            break;
        case discriminant > 0:
            sn = 2;
            break;
    }
    return sn
}

var snijpunten = BerekenSn(discriminant);
console.log(snijpunten);
