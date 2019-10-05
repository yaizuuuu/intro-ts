var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p;
// OK, because of structural typing
p = new Person();
// 直接オブジェクトを入れる場合はNG
// let p1: Named = {name: 'test', test: 'test'};
var x;
// y's inferred type is { name: string; location: string; }
var y = { name: "Alice", location: "Seattle" };
// 直接入れていないのセーフ
x = y;
function greet(n) {
    console.log("Hello, " + n.name);
}
// OK
greet(y);
// NG, こちらも直接入れているため
// greet({name: 'test', test: 'test'});
var xFn = function (a) { return 0; };
var yFn = function (b, s) { return 0; };
yFn = xFn; // OK
// xFn = yFn; // Error
