/*********************************************************************************/
// デフォルトは数値列挙
// 値を指定しない場合は0から始まる
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var Response2;
(function (Response2) {
    Response2[Response2["No"] = 0] = "No";
    Response2[Response2["Yes"] = 1] = "Yes";
})(Response2 || (Response2 = {}));
function respond(recipient, message) {
}
respond('Princes Caroline', Response2.Yes);
// NG, 関数実行の値によってenumの値を指定できるが, その場合すべてのプロパティを予め指定しなければならない
// enum E {
//     A = getSome(),
//     B,
// }
// 文字列列挙
var Drection2;
(function (Drection2) {
    Drection2["Up"] = "Up";
    Drection2["Down"] = "Down";
    Drection2["Right"] = "Right";
    Drection2["Left"] = "Left";
})(Drection2 || (Drection2 = {}));
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 0] = "Read";
    FileAccess[FileAccess["Write"] = 1] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 1] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.ReadWrite);
/*********************************************************************************/
/*********************************************************************************/
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    // NG, ShapeKind.Circleのみ
    kind: ShapeKind.Circle,
    radius: 100
};
var E;
(function (E) {
    E[E["Foo"] = 0] = "Foo";
    E[E["Bar"] = 1] = "Bar";
})(E || (E = {}));
// function f(x: E) {
//     // NG, Foo出ない場合, Barであることが確定するため
//     if (x !== E.Foo || x !== E.Bar) {
//     }
// }
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warn"] = 1] = "Warn";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Debug"] = 3] = "Debug";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    var num = LogLevel[key];
    if (num <= LogLevel.Warn) {
        console.log('Log level key is: ', key);
        console.log('Log level value is: ', num);
        console.log('Log level message is: ', message);
    }
}
printImportant('Error', 'This is a message');
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
// 逆マッピングもできる
console.log(Enum[Enum.A]); // = A
console.log(0 /* Up */);
