/*******************************************/

// 交差型: 複数の型を組み合わせる
function extend<First, Second>(first: First, second: Second): First & Second {
    return {...first, ...second} as First & Second;
}

/*******************************************/


/*******************************************/

// ユニオン型: パイプラインで複数の方を許容する
interface Bird {
    fly();

    layEgg();
}

interface Fish {
    swim();

    layEgg();
}

function getSmallPet(): Bird | Fish {
    return {
        fly() {
        },
        layEgg() {
        }
    };
}

let pet = getSmallPet();
// OK
pet.layEgg();
// NG, Fish型には存在しないため
// pet.fly();

// ユニオン型でそれぞれしか持っていないプロパティには以下のようにアクセスする
if ((pet as Fish).swim) {
    (pet as Fish).swim();
} else if ((pet as Bird).fly) {
    (pet as Bird).fly();
}

// 型ガード, ユニオン型のそれぞれにしかないプロパティアクセスされる際に使う
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

if (isFish(pet)) {
    // 型ガードの関数をifで使用したため, コンパイルエラーにならない
    pet.swim();
} else {
    pet.fly();
}

// inを使うことでコンパイルエラーを避けることもできる
function move(pet: Fish | Bird) {
    if ("swim" in pet) {
        return pet.swim();
    }
    return pet.fly();
}

// typeofでもコンパイルエラーを防ぐ
function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

interface Padder {
    getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) {

    }

    getPaddingString(): string {
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder {
    constructor(private value: string) {

    }

    getPaddingString(): string {
        return this.value;
    }
}

function getRandomPadder(): SpaceRepeatingPadder | StringPadder {
    return Math.random() > 0.5
        ? new SpaceRepeatingPadder(4)
        : new StringPadder(" ");

}

let padder: Padder = getRandomPadder();

// instanceofによる型ガード
if (padder instanceof SpaceRepeatingPadder) {
    console.log(padder);
}

if (padder instanceof StringPadder) {
    console.log(padder);
}
/*******************************************/

/*******************************************/

//nullable
function f(sn: string | null): string {
    return sn || "default";
}


function fixed(name: string | null): string {
    function postfix(epithet: string) {
        // !はnullじゃない場合という意味になる
        return name!.charAt(0) + '.  the ' + epithet; // ok
    }

    name = name || "Bob";
    return postfix("great");
}

/*******************************************/


/*******************************************/
// interfaceに似ている, ユニオン, タプル型などのタイプに名前をつけて再利用できる
type Name = string;
type NameResolver = () => string;
// こういうのはinterfaceでつかないためまさしくのユースケース
type NameOrResolver = Name | NameResolver;
// ジェネリック型も使える
type Container<T> = { value: T };
// 継承は使えない, 交差型で継承に近いことはできる
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

let person: LinkedList<Person>;
// let s = person.name;
// s = person.next.name;

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
        } else {
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// NG, `type Easing` にない値
// button.animate(0, 0, "uneasy");
/*******************************************/


/*******************************************/
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}

function area(s: Shape) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * s.radius ** 2;
        //
        default:
            return assertNever(s);
    }
}

/*******************************************/

/*******************************************/
class BasicCalculator {
    public constructor(protected value: number = 0) {

    }

    public add(operand: number): this {
        this.value += operand;
        return this;
    }

    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }

    public currentValue() {
        return this.value;
    }
}

let v = new BasicCalculator(1)
    .add(2)
    .multiply(5)
    .currentValue();

console.log(v);
/*******************************************/

/*******************************************/
// `K extends keyof T` で Kに格納されるkeyの一覧が型となる
// T[K][]でKに格納されていたkeyがアサインされた配列を指定の型とできる
function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
    return propertyNames.map(n => o[n]);
}

interface Car {
    manufacturer: string;
    model: string;
    year: number;
}

let taxi: Car = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2014,
};

// OK
let makeAndModel: string[] = pluck(taxi, ['manufacturer', 'model']);
let makeAndModel2 = pluck(taxi, ['model', 'year']);
// NG, unknownはtaxiに存在しないkeyのため
// let makeAndModel3 = pluck(taxi, ['year', 'unknown']);

// ユニオン型('manufacturer' | 'model' | 'year')
let carProps: keyof Car;

interface Dictionary<T> {
    [key: string]: T;
}

// (number | string)型, Dictionaryのstring型の場合, 42, '42'でアクセスできる故
let keys: keyof Dictionary<number>;
// number型
let values: Dictionary<number>['foo'];

interface Person {
    name: string;
    age: number;
}

interface PersonPartial {
    name?: string;
    age?: number;
}

interface PersonReadOnly {
    readonly name: string;
    readonly age: number;
}

// ReadOnlyのオブジェクトに変換する
type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]
};

interface ReadOnly2<T, P extends keyof T> {
    readonly P: T[P]
}

// 任意のプロパティに変更する
type Partial2<T> = {
    [P in keyof T]?: T[P]
};

interface Partial3<T, P extends keyof T> {
    P?: T[P]
}

type test = ReadOnly<Person>;
let test2: ReadOnly2<Person, keyof Person>;
type test3 = Partial2<Person>;
let test4: Partial3<Person, keyof Person>;

type Keys = 'option1 | option2';
type Flags = { [K in Keys]?: boolean | null };

type Proxy<T> = {
    get(): T;
    set(value: T): void;
}
type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
};
/*******************************************/


// https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types
