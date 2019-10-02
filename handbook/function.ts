/*****************************************************/
// 関数を変数に詰めるときの型付け
// (para: type...) => type で型付け
let myAdd: (x: number, y: number) => number =
    (x: number, y: number): number => x + y;
// 何も返さない場合
let myAdd2: (x: number, y: number) => void;

// 値側に型指定しなくても推測される
let myAdd3: (x: number, y: number) => number =
    (x, y): number => x + y;
/*****************************************************/


/*****************************************************/
function buildName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

// NG
// let result1 = buildName("Bob");
// let result2 = buildName("Bob", "Adams", "Sr.");
// OK
let result3 = buildName("Bob", "Adams");

function buildName2(firstName: string, lastName?: string): string {
    if (lastName)
        return `${firstName} ${lastName}`;
    else
        return firstName;
}

// NG
// let result21 = buildName2("Bob", "Adams", "Sr.");
// OK
let result22 = buildName2("Bob");
let result23 = buildName2("Bob", "Adams");

// デフォルトの設定
function buildName3(firstName: string, lastName: string = 'Smith'): string {
    return `${firstName} ${lastName}`;
}

// 残りの引数の受け取り
function buildName4(firstName: string, ...restOfName: string[]): string {
    return `${firstName} ${restOfName.join(' ')}`;
}
// OK
let employeeName = buildName4("Joseph", "Samuel", "Lucas", "MacKinzie");
// 型付けを行う場合は以下のようになる
let buildNameFunc: (f: string, ...rest: string[]) => string = buildName4;
/*****************************************************/


/*****************************************************/
interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    card: number[];
    // 引数がthisの場合
    createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    card: Array(52),
    // thisをパラメータに指定しておくと, 実行時にthisが入る
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
};

// 引数に何も指定しないで実行時にthisが入る
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
/*****************************************************/


/*****************************************************/
let suits = ['hearts', 'spades', 'clubs', 'diamonds'];
// OK, 型指定を複数行える, 上から順に評価していく
function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
// 実行内容は最後に記述する
// 実行内容の記述であり, メソッドのオーバーロードではない
function pickCard(x): any {
    if (typeof x === 'object') {
        return Math.floor(Math.random() * x.length);
    } else if (typeof x === 'number') {
        let pickedSuit = Math.floor(x / 13);
        return {suit: suits[pickedSuit], card: x % 13}
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
/*****************************************************/
