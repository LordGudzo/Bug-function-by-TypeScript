function summ(a) {
    var x = Object.keys(a).map(function (k) {
        var elem = a[k];
        if (typeof (elem === null || elem === void 0 ? void 0 : elem.cvalue) === "undefined")
            return 2021;
        if (typeof elem.cvalue === 'string')
            return parseInt(elem.cvalue) || 2021;
        if (typeof elem.cvalue === 'number')
            return elem.cvalue;
        if (isBigObject(elem.cvalue))
            return summ(elem.cvalue);
        return +elem.cvalue;
    });
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
function isBigObject(elem) {
    if (typeof elem === 'object') {
        return true;
    }
    else {
        return false;
    }
}
var test1 = {
    hello: { cvalue: 1 },
    world: { cvalue: { yay: { cvalue: "2" } }
    },
    lod: undefined
};
console.log(summ(test1));
