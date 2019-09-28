interface LabelValue {
    label: string
}

// 引数でチェックするのは, あくまでもLabelValueと一致するプロパティを持つかどうか
function printLabel(labelObject: LabelValue) {
    console.log(labelObject.label);
}

// OK
let myObject = {size: 10, label: "Size 10 Object"};
printLabel(myObject);
// NG, 変数の型として指定するためには完全一致が求められる
// let myObject: LabelValue = {size: 10, label: "Size 10 Object"};
// printLabel(myObject);


// 必須ではないプロパティの場合は?をつける
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string, area: number } {
    let newSquare = {color: 'white', area: 100};

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

// OK, 型アサーションで厳密なチェックを回避できる
console.log({couuulor: 'red', size: 10} as SquareConfig);
let mySquare = createSquare({color: 'red', size: 10} as SquareConfig);
// OK, 型アサーションなら一つもプロパティが一致していなくても通ってしまう
// let mySquare = createSquare({couuuulor: 'red', size: 10} as SquareConfig);
console.log(mySquare);


interface Point {
    readonly x: number;
    readonly y: number;
}

let p: Point = {x: 10, y: 15};
// NG, readonlyのため上書きできない
// p.x = 15;


let a: number[] = [1, 2, 3];
// readonlyの配列も作成できる, この配列は破壊的なメソッドはすべて削除される
let ro: ReadonlyArray<number> = a;
// NG, readonlyのため変更できない
// ro[0] = 100;
// ro.push(100);
