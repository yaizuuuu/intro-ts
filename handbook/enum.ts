/*********************************************************************************/
// デフォルトは数値列挙
// 値を指定しない場合は0から始まる
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

enum Response2 {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response2): void {

}

respond('Princes Caroline', Response2.Yes);

// NG, 関数実行の値によってenumの値を指定できるが, その場合すべてのプロパティを予め指定しなければならない
// enum E {
//     A = getSome(),
//     B,
// }

// 文字列列挙
enum Drection2 {
    Up = 'Up',
    Down = 'Down',
    Right = 'Right',
    Left = 'Left',
}

enum FileAccess {
    // constant members
    None,
    Read    = 0,
    Write   = 1,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}

console.log(FileAccess.ReadWrite);
/*********************************************************************************/


/*********************************************************************************/
enum ShapeKind {
    Circle,
    Square
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c: Circle = {
    // NG, ShapeKind.Circleのみ
    kind: ShapeKind.Circle,
    radius: 100,
};

enum E {
    Foo,
    Bar,
}

// function f(x: E) {
//     // NG, Foo出ない場合, Barであることが確定するため
//     if (x !== E.Foo || x !== E.Bar) {
//     }
// }


enum LogLevel {
    Error, Warn, Info, Debug
}

// Error or Warn or Info or Debug
type LofLevelStrings = keyof typeof LogLevel

function printImportant(key: LofLevelStrings, message: string) {
    const num = LogLevel[key];

    if (num <= LogLevel.Warn) {
        console.log('Log level key is: ', key);
        console.log('Log level value is: ', num);
        console.log('Log level message is: ', message);
    }
}

printImportant('Error', 'This is a message');

enum Enum {
    A
}

// 逆マッピングもできる
console.log(Enum[Enum.A]); // = A

const enum Directions3 {
    Up,
    Down,
    Left,
    Right
}

// コンパイル時に短くなる
console.log(Directions3.Up);