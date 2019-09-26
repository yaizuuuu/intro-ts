let isDone: boolean = true;
console.log(isDone);

let decimal: number = 6;
console.log(decimal);

let color: string = 'red';
console.log(color);

let fullName: string = `Bob Bobbington`;
let age: number = 36;
// テンプレート文字列の中で計算を実行できる
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month`;
console.log(sentence);

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
console.log(list, list2);

// OK
let tuple: [string, number] = ['hello', 10];
// NG
// let tuple: [string, number] = [10, 'hello'];
console.log(
    tuple,
    // OK
    tuple[0].substring(1),
    // NG, substringはstringのメソッドのためエラー
    // tuple[1].substring(1),
);
// NG, tuple型に定義していない
// tuple[3] = 'world';
// console.log(tuple[5].toString());

enum Color {Red = 0, Green = 4, Blue = 2}

let c: Color = Color.Green;
console.log(c);


enum Color2 {Red = 0, Green = 4, Blue = 100}

let colorName: string = Color2[11];
console.log(colorName);


let notSure: any = 4;
notSure = "Not Sure";
notSure = true;
console.log(notSure);


let notSure2: any = 4;
// OK, any型に対してはプロパティにアクセスできる
// notSure2.ifItExists();
// notSure2.toFixed();

let notSure3: Object = 4;
// NG, Object型にはプロパティを割り当てることができない
// 実際に存在するメソッドだとしてもアクセスできない
// notSure3.toFixed();

let anyList: any[] = [1, true, "free"];
anyList[1] = 100;
console.log(anyList);


function warnUser(): void {
    console.log('This is warning message');
}

warnUser();

let unusable: void = undefined;
// strictNullChecksの場合はエラー
// strictNullChecksの場合はnullを代入できるのはany/null型, undefinedを代入できるのはany/undefined/void型
// undefined, nullが両方とも代入できるようにするには`string | undefined | null`のように宣言する
unusable = null;
console.log(unusable);

// never型値が発生しない
function error(message: string): never {
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
let objectObject: object | null;
objectObject = {prop: 0};
console.log(objectObject);
objectObject = null;
console.log(objectObject);
// プリミティブ型なのでコンパイルエラー
// objectObject = 42;
// console.log(objectObject);


let someValue: any = 'this is string';
let strLength: number = (<string>someValue).length;
console.log(strLength);