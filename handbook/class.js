var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/******************************************************************/
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var snake = new Snake('bell');
snake.move(100);
/******************************************************************/
/******************************************************************/
var Octopus = /** @class */ (function () {
    // readonlyはconstructorのみ変更できる
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus('Man with the 8 strong legs');
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
var Grid = /** @class */ (function () {
    // コンストラクトの引数にメンバ変数を直接指定して, 省略して記述できる
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    // private, protected, publicが設定できる
    // publicの場合外部からでも値を変更できる
    // private, protectedの場合は変更できない
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
/******************************************************************/
/******************************************************************/
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor() {
    //     super('Accounting and Auditing');
    // }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department;
// NG, abstractはインスタンス化できない
// department = new Department('Accounting and Auditing');
department = new AccountingDepartment('Accounting and Auditing');
department.printName();
department.printMeeting();
// NG, departmentの型がDepartmentになっているためAccountingDepartmentで定義したメソッドにはアクセスできない
// department.generateReports();
/******************************************************************/
/******************************************************************/
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = 'Hello, there';
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
// typeofで指定することにより, 静的オブジェクトとして変数に代入できる
// 静的オブジェクトにするとstatic以外の定義が削ぎ落とされる
var greetMaker = Greeter;
greetMaker.standardGreeting = 'Hey there!';
console.log(greetMaker);
var greeter2 = new Greeter();
console.log(greeter2.greet());
/******************************************************************/
/******************************************************************/
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
// OK, 必要な
var point3d = { x: 1, y: 2, z: 3 };
var Point4d = /** @class */ (function () {
    function Point4d() {
    }
    return Point4d;
}());
/******************************************************************/
