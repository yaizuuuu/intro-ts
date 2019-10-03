/***************************************************************************************/

// 型を引数として受け取って定義に使用できる
function identity<T>(arg: T): T {
    return arg;
}

// 型を<>で渡して使用する
let output = identity<string>('String');
// 型を推論で指定するとこもできる(明示的に<>で指定しなくてもよい)
let output2 = identity('String');

// function identity2<T>(arg: T): T {
//     // NG, 型がまだ確定していないため
//     console.log(arg.length);
//     return arg;
// }

// 引数の(配列の)プロパティにアクセスさせる場合は, ジェネリックを配列として指定する
function identity3<T>(args: T[]): T[] {
    console.log(args.length);
    return args;
}

// こちらは上と同義
function identity4<T>(args: Array<T>): Array<T> {
    console.log(args.length);
    return args;
}

// identityと同義
let identity5: <U>(arg: U) => U = identity;
// identityと同義, オブジェクトリテラル型でも呼び出せる
let identity6: { <U>(arg: U): U } = identity;

// interfaceの中で定義もできる, identityと同義
interface InterfaceIdentity {
    <T>(arg: T): T;
}

let identity7: InterfaceIdentity = identity;

// ジェネリックをinterface全体のパラメータにすることもできる
interface InterfaceIdentity2<T> {
    (arg: T): T;
}

let identity8: InterfaceIdentity2<number> = identity;
/***************************************************************************************/


/***************************************************************************************/
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, Y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;

let myGenericString = new GenericNumber<string>();
myGenericString.zeroValue = '0';
myGenericString.add = (x, y) => x + y;
console.log(myGenericString.add(myGenericString.zeroValue, 'test'));
/***************************************************************************************/


/***************************************************************************************/
interface LengthWise {
    length: number
}

function identity9<T extends LengthWise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// NG, もとめるinterfaceを継承していないため
// identity9(10);
// OK, interfaceに求められるプロパティを持つため
identity9({length: 9, value: 3});

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = {a: 1, b: 2, c: 3, d: 4};

getProperty(x, 'a');
// NG, KはTを継承しているため, a,b,c,dのどれかを持つ
// getProperty(x, 'm');
/***************************************************************************************/


/***************************************************************************************/
// ファクトリーメソッドの場合は `{new(): T;}` でclassのconstructorを型付けする
function create<T>(c: { new(): T; }): T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nameTag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

// ファクトリーメソッドの場合 `c: new() => A` でclassのconstructorの型付けをする
function createInstance<A extends Animal>(c: new() => A): A {
    return new c();
}

createInstance(Bee);
createInstance(Lion);

