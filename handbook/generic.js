/***************************************************************************************/
// 型を引数として受け取って定義に使用できる
function identity(arg) {
    return arg;
}
// 型を<>で渡して使用する
var output = identity('String');
// 型を推論で指定するとこもできる(明示的に<>で指定しなくてもよい)
var output2 = identity('String');
// function identity2<T>(arg: T): T {
//     // NG, 型がまだ確定していないため
//     console.log(arg.length);
//     return arg;
// }
// 引数の(配列の)プロパティにアクセスさせる場合は, ジェネリックを配列として指定する
function identity3(args) {
    console.log(args.length);
    return args;
}
// こちらは上と同義
function identity4(args) {
    console.log(args.length);
    return args;
}
// identityと同義
var identity5 = identity;
// identityと同義, オブジェクトリテラル型でも呼び出せる
var identity6 = identity;
var identity7 = identity;
var identity8 = identity;
/***************************************************************************************/
/***************************************************************************************/
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var myGenericString = new GenericNumber();
myGenericString.zeroValue = '0';
myGenericString.add = function (x, y) { return x + y; };
console.log(myGenericString.add(myGenericString.zeroValue, 'test'));
function identity9(arg) {
    console.log(arg.length);
    return arg;
}
// NG, もとめるinterfaceを継承していないため
// identity9(10);
// OK, interfaceに求められるプロパティを持つため
identity9({ length: 9, value: 3 });
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
getProperty(x, 'm');
