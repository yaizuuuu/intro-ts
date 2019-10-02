/*****************************************************/
// 関数を変数に詰めるときの型付け
// (para: type...) => type で型付け
var myAdd = function (x, y) { return x + y; };
// 何も返さない場合
var myAdd2;
// 値側に型指定しなくても推測される
var myAdd3 = function (x, y) { return x + y; };
/*****************************************************/
/*****************************************************/
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
// NG
// let result1 = buildName("Bob");
// let result2 = buildName("Bob", "Adams", "Sr.");
// OK
var result3 = buildName("Bob", "Adams");
function buildName2(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
// NG
// let result21 = buildName2("Bob", "Adams", "Sr.");
// OK
var result22 = buildName2("Bob");
var result23 = buildName2("Bob", "Adams");
// デフォルトの設定
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Smith'; }
    return firstName + " " + lastName;
}
// 残りの引数の受け取り
function buildName4(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(' ');
}
// OK
var employeeName = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
// 型付けを行う場合は以下のようになる
var buildNameFunc = buildName4;
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    card: Array(52),
    // thisをパラメータに指定しておくと, 実行時にthisが入る
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
// 引数に何も指定しないで実行時にthisが入る
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
/*****************************************************/
/*****************************************************/
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
// 実行内容は最後に記述する
// 実行内容の記述であり, メソッドのオーバーロードではない
function pickCard(x) {
    if (typeof x === 'object') {
        return Math.floor(Math.random() * x.length);
    }
    else if (typeof x === 'number') {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
/*****************************************************/
