var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function f() {
    var x = 100;
}
function g() {
    var x = 10;
    // var x = 10;
}
var C = /** @class */ (function () {
    function C() {
        this.p = 12;
    }
    C.prototype.m = function () {
    };
    return C;
}());
var c = new C();
var clone = __assign({}, c);
console.log(clone.p);
console.log(clone.m());
