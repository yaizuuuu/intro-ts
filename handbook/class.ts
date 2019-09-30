/******************************************************************/
class Animal {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    move(distanceInMeters: number = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}

let snake = new Snake('bell');
snake.move(100);
/******************************************************************/


/******************************************************************/
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;

    // readonlyはconstructorのみ変更できる
    constructor(theName: string) {
        this.name = theName;
    }
}

let dad = new Octopus('Man with the 8 strong legs');
// dad.name = 'You can\'t change';
/******************************************************************/


/******************************************************************/
// **getter, setterはES5以上の機能になりES3までダウンレベル化ができない**
// TODO: SEARCH ME: set, getを使ってクロスブラウザ対応が大丈かどうか
// const fullNameMaxLength = 10;
//
// class Employee {
//     // privateで外部から変更も取得もできない
//     private _fullName: string;
//
//     // getterにより, 安全に値を渡せる
//     get fullName(): string {
//         return this._fullName;
//     }
//
//     // setterにより, バリデーションをかけながら変更ができる
//     set fullName(newName: string) {
//         if (newName && newName.length > fullNameMaxLength) {
//             throw new Error("fullName has a max length of " + fullNameMaxLength);
//         }
//
//         this._fullName = newName;
//     }
// }
//
// let employee = new Employee();
// employee.fullName = "Bob Smith";
/******************************************************************/


/******************************************************************/
class Grid {
    // private, protected, publicが設定できる
    // publicの場合外部からでも値を変更できる
    // private, protectedの場合は変更できない
    static origin = {x: 0, y: 0};

    calculateDistanceFromOrigin(point: { x: number, y: number }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);

        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    // コンストラクトの引数にメンバ変数を直接指定して, 省略して記述できる
    constructor(public scale: number) {
    }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
/******************************************************************/


/******************************************************************/
abstract class Department {
    constructor(public name: string) {
    }

    printName(): void {
        console.log(`Department name ${this.name}`)
    }

    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    // constructor() {
    //     super('Accounting and Auditing');
    // }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department;
// NG, abstractはインスタンス化できない
// department = new Department('Accounting and Auditing');
department = new AccountingDepartment('Accounting and Auditing');
department.printName();
department.printMeeting();
// NG, departmentの型がDepartmentになっているためAccountingDepartmentで定義したメソッドにはアクセスできない
// department.generateReports();
/******************************************************************/


/******************************************************************/
class Greeter {
    static standardGreeting = 'Hello, there';
    greeting: string;

    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        } else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

// typeofで指定することにより, 静的オブジェクトとして変数に代入できる
// 静的オブジェクトにするとstatic以外の定義が削ぎ落とされる
let greetMaker: typeof Greeter = Greeter;
greetMaker.standardGreeting = 'Hey there!';
console.log(greetMaker);

let greeter2: Greeter = new Greeter();
console.log(greeter2.greet());
/******************************************************************/


/******************************************************************/
class Point {
    public x: number;
    public y: number;


    // private x: number;
    // private y: number;
}

interface Point3d extends Point {
    z: number;
}

// OK, 必要な
let point3d: Point3d = {x: 1, y: 2, z: 3};

class Point4d implements Point3d {
    x: number;
    y: number;
    z: number;
}

// Pointのプロパティがprivate, protectedの場合
// class Point4d implements Point3d extends Point {
//     z: number;
// }
/******************************************************************/
