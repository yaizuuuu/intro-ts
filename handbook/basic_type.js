var isDone = true;
console.log(isDone);
var decimal = 6;
console.log(decimal);
var color = 'red';
console.log(color);
var fullName = "Bob Bobbington";
var age = 36;
// テンプレート文字列の中で計算を実行できる
var sentence = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month";
console.log(sentence);
var list = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list, list2);
// OK
var tuple = ['hello', 10];
// NG
// let tuple: [string, number] = [10, 'hello'];
console.log(tuple, 
// OK
tuple[0].substring(1));
// NG, tuple型に定義していない
// tuple[3] = 'world';
// console.log(tuple[5].toString());
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 0] = "Red";
    Color2[Color2["Green"] = 4] = "Green";
    Color2[Color2["Blue"] = 100] = "Blue";
})(Color2 || (Color2 = {}));
var colorName = Color2[11];
console.log(colorName);
var notSure = 4;
notSure = "Not Sure";
notSure = true;
console.log(notSure);
var notSure2 = 4;
// OK, any型に対してはプロパティにアクセスできる
// notSure2.ifItExists();
// notSure2.toFixed();
var notSure3 = 4;
// NG, Object型にはプロパティを割り当てることができない
// 実際に存在するメソッドだとしてもアクセスできない
// notSure3.toFixed();
var anyList = [1, true, "free"];
anyList[1] = 100;
console.log(anyList);
function warnUser() {
    console.log('This is warning message');
}
warnUser();
var unusable = undefined;
// strictNullChecksの場合はエラー
// strictNullChecksの場合はnullを代入できるのはany/null型, undefinedを代入できるのはany/undefined/void型
// undefined, nullが両方とも代入できるようにするには`string | undefined | null`のように宣言する
unusable = null;
console.log(unusable);
// never型値が発生しない
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('Something failed');
}
// function infiniteLoop(): never {
//     while (true) {
//         console.log(1);
//     }
// }
// object型は非プリミティブ型を表すタイプ, Object型とは異なる
var objectObject;
objectObject = { prop: 0 };
console.log(objectObject);
objectObject = null;
console.log(objectObject);
// プリミティブ型なのでコンパイルエラー
// objectObject = 42;
// console.log(objectObject);
var someValue = 'this is string';
var strLength = someValue.length;
console.log(strLength);
