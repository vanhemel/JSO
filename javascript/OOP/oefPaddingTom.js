'use strict';

Number.pad = function (num, size, char) {
    var numString= num.toString();
    var result = "";
    if (numString.length < size) {
        var verschil = size - numString.length;
        
        for (var i = 0; i < verschil; i++)
            result += "0";
    }
    result += num;
    return result;
}

console.log(Number.pad(12, 4, '0'));