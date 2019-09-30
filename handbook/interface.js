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
// 引数でチェックするのは, あくまでもLabelValueと一致するプロパティを持つかどうか
function printLabel(labelObject) {
    console.log(labelObject.label);
}
// OK
var myObject = { size: 10, label: "Size 10 Object" };
printLabel(myObject);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
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
console.log({ couuulor: 'red', size: 10 });
var mySquare = createSquare({ color: 'red', size: 10 });
// OK, 型アサーションなら一つもプロパティが一致していなくても通ってしまう
// let mySquare = createSquare({couuuulor: 'red', size: 10} as SquareConfig);
console.log(mySquare);
var p = { x: 10, y: 15 };
// NG, readonlyのため上書きできない
// p.x = 15;
var a = [1, 2, 3];
// readonlyの配列も作成できる, この配列は破壊的なメソッドはすべて削除される
var ro = a;
// OK, [propName: string]: anyで任意の型のプロパティを受け取れるようにしたため
var squareOption = { coulor: 'red', width: 100 };
var squareOption2 = { coulor: 'red' };
// OK, interfaceと同じparameter名である必要はなし
var mySearch = function (src, substr) { return src.search(substr) > -1; };
// OK, 型がinterfaceにより推測される
var mySearch2 = function (src, substr) { return src.search(substr) > -1; };
var myArray;
myArray = ['bob', 'Fred'];
var myStr = myArray[0];
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myROArray = ['Alice', 'Bob'];
var Clock = /** @class */ (function () {
    function Clock(h) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('beep beep');
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('tick tok');
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var Clock4 = /** @class */ (function () {
    function Clock3(h, m) {
    }
    Clock3.prototype.tick = function () {
        console.log('beep beep');
    };
    return Clock3;
}());
var square = {};
square.color = 'red';
square.sideLength = 10;
square.penWidth = 10;
function getCounter() {
    var counter = (function (start) {
    });
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
/******************************************************************************************/
/******************************************************************************************/
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
var Image2 = /** @class */ (function (_super) {
    __extends(Image2, _super);
    function Image2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Image2.prototype.select = function () {
    };
    return Image2;
}(Control));
/******************************************************************************************/
