// 引数でチェックするのは, あくまでもLabelValueと一致するプロパティを持つかどうか
function printLabel(labelObject) {
    console.log(labelObject.label);
}
// OK
var myObject = { size: 10, label: "Size 10 Object" };
printLabel(myObject);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// OK, interfaceにあるプロパティを持っている
// let myProp = {color: 'red', size: 10};
// let mySquare = createSquare(myProp);
// NG, interfaceにある任意のプロパティを一つも持っていない場合
// let myProp = {couuuulor: 'red', size: 10};
// let mySquare = createSquare(myProp);
// NG, 直接引数にオブジェクトを入れた場合, 厳密なチェックがされる
// let mySquare = createSquare({color: 'red', size: 10});
// OK, 型アサーションで
console.log({ couuulor: 'red', size: 10 });
var mySquare = createSquare({ color: 'red', size: 10 });
// let mySquare = createSquare({couuuulor: 'red', size: 10} as SquareConfig);
console.log(mySquare);
var p = { x: 10, y: 15 };
// NG, readonlyのため上書きできない
// p.x = 15;
var a = [1, 2, 3];
// readonlyの配列も作成できる, この配列は破壊的なメソッドはすべて削除される
var ro = a;
// NG, readonlyのため変更できない
// ro[0] = 100;
// ro.push(100);
