/******************************************************************************************/
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
/******************************************************************************************/


/******************************************************************************************/

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
// let mySquare1 = createSquare(myProp);

// NG, 直接引数にオブジェクトを入れた場合, 厳密なチェックがされる
// let mySquare = createSquare({color: 'red', size: 10});

// OK, 型アサーションで厳密なチェックを回避できる
// TODO: SEARCH ME: APIの返り値など厳密に返り値が固定・断定できない場合に使うべき??
console.log({couuulor: 'red', size: 10} as SquareConfig);
let mySquare = createSquare({color: 'red', size: 10} as SquareConfig);
// OK, 型アサーションなら一つもプロパティが一致していなくても通ってしまう
// let mySquare = createSquare({couuuulor: 'red', size: 10} as SquareConfig);
console.log(mySquare);
/******************************************************************************************/


/******************************************************************************************/
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
/******************************************************************************************/


/******************************************************************************************/

// 任意のプロパティを持ちたい場合[propName: string]: any
interface SquareConfigAny {
    color?: string;
    width?: number;

    [propName: string]: any,
}

// OK, [propName: string]: anyで任意の型のプロパティを受け取れるようにしたため
let squareOption: SquareConfigAny = {coulor: 'red', width: 100};
let squareOption2: SquareConfigAny = {coulor: 'red'};
/******************************************************************************************/


/******************************************************************************************/

// interfaceで関数を定義する場合
interface SearchFunc {
    (source: string, subString: string): boolean
}

// OK, interfaceと同じparameter名である必要はなし
let mySearch: SearchFunc = (src: string, substr: string): boolean => src.search(substr) > -1;
// OK, 型がinterfaceにより推測される
let mySearch2: SearchFunc = (src, substr) => src.search(substr) > -1;
// NG, returnで返す型が違反
// let mySearch3: SearchFunc = (src, substr) => String(src.search(substr) > -1);
/******************************************************************************************/


/******************************************************************************************/
// interfaceで配列も定義できる
// indexはnumber, stringをサポートする
interface StringArray {
    [index: number]: string
}

let myArray: StringArray;
myArray = ['bob', 'Fred'];
let myStr: string = myArray[0];

class Animal {
    name: string
}

class Dog extends Animal {
    bleeder: string
}

// NG: number, stringの両方をサポートする配列を定義するときに違う型の値を設定できない
// '10', 10で同じ型の値を返すことができなくなってしまう
interface NoOkay {
    [x: number]: Animal;

    // [x: string]: Dog;
}


interface NumberDictionary {
    // NG, nameと定義がかぶるためNG
    // [index: string]: number;
    // OK, nameと定義がかぶっても成立するため
    [index: string]: number | string;

    length: number;
    name: string;
}


interface ReadOnlyStringArray {
    readonly [index: number]: string;
}

let myROArray: ReadOnlyStringArray = ['Alice', 'Bob'];
// myROArray[2] = "Mallory";
/******************************************************************************************/


/******************************************************************************************/
interface ClockInterface {
    currentTime: Date;

    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();

    constructor(h: number,) {
    }

    setTime(d: Date): void {
        this.currentTime = d;
    }
}


// NG, classにimplementsされたinterfaceはインスタンスに対してチェックを行うため,コンストラクターを定義しても,
// クラス定義に継承したメソッドが見つからずNGになる
// interface Clock2Constructor {
//     new (hour: number, minute: number);
// }

// class Clock2 implements Clock2Constructor {
//     currentTime: Date;
//     constructor(h: number, m: number) {}
// }


// OK, コンストラクターを定義する方法1
interface Clock2Interface {
    tick(): void;
}

interface Clock2Constructor {
    new(hour: number, minute: number): Clock2Interface
}

function createClock(ctor: Clock2Constructor, hour: number, minute: number) {
    return new ctor(hour, minute);
}

class DigitalClock implements Clock2Interface {
    constructor(h: number, m: number) {
    }

    tick(): void {
        console.log('beep beep')
    }
}

class AnalogClock {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log('tick tok');
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);


// OK, コンストラクターを定義する方法2
interface Clock3Constructor {
    new(hour: number, minute: number);
}

interface Clock3Interface {
    tick();
}

const Clock4: Clock3Constructor = class Clock3 implements Clock3Interface {
    constructor(h: number, m: number) {
    }

    tick() {
        console.log('beep beep')
    }
};
/******************************************************************************************/


/******************************************************************************************/
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number
}

// interfaceがinterfaceをextendsすることができる
// 複数extendsできる
interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = 'red';
square.sideLength = 10;
square.penWidth = 10;
/******************************************************************************************/


/******************************************************************************************/
interface Counter {
    (start: number): string;

    interval: number;

    reset(): void;
}

function getCounter(): Counter {
    let counter = ((start: number) => {
    }) as Counter;
    counter.interval = 123;
    counter.reset = () => {
    };
    return counter
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
/******************************************************************************************/


/******************************************************************************************/
class Control {
    private state: any;
    // **後述: この場合は一階層で再現できる**
    // public state: any;
}

// interfaceはclassをextendsできる
// このinterfaceをimplementsしたclassはControlをextendsしなければならない
// 実装は継承されない
interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {}
}

class TextBox extends Control {
    select() { }
}

// NG, Controlをextendsしなくてはならない
// implementsで指定するSelectableControlは親にprivateのプロパティを持っているため
// 一階層では再現できない
// publicの場合は一階層で再現できるためOK
// class Image2 implements SelectableControl {
//     private state: any;
//     select(): void {
//     }
// }
/******************************************************************************************/
