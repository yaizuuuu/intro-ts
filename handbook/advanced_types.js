/*******************************************/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 交差型: 複数の型を組み合わせる
function extend(first, second) {
    return __assign(__assign({}, first), second);
}
function getSmallPet() {
    return {
        fly: function () {
        },
        layEgg: function () {
        }
    };
}
var pet = getSmallPet();
// OK
pet.layEgg();
// NG, Fish型には存在しないため
// pet.fly();
// ユニオン型でそれぞれしか持っていないプロパティには以下のようにアクセスする
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
// 型ガード, ユニオン型のそれぞれにしかないプロパティアクセスされる際に使う
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    // 型ガードの関数をifで使用したため, コンパイルエラーにならない
    pet.swim();
}
else {
    pet.fly();
}
// inを使うことでコンパイルエラーを避けることもできる
function move(pet) {
    if ("swim" in pet) {
        return pet.swim();
    }
    return pet.fly();
}
// typeofでもコンパイルエラーを防ぐ
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(" ");
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() > 0.5
        ? new SpaceRepeatingPadder(4)
        : new StringPadder(" ");
}
var padder = getRandomPadder();
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
function f(sn) {
    return sn || "default";
}
function fixed(name) {
    function postfix(epithet) {
        // !はnullじゃない場合という意味になる
        return name.charAt(0) + '.  the ' + epithet; // ok
    }
    name = name || "Bob";
    return postfix("great");
}
var person;
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
        }
        else {
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
function area(s) {
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * Math.pow(s.radius, 2);
        //
        default:
            return assertNever(s);
    }
}
/*******************************************/
/*******************************************/
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    return BasicCalculator;
}());
var v = new BasicCalculator(1)
    .add(2)
    .multiply(5)
    .currentValue();
console.log(v);
/*******************************************/
/*******************************************/
// `K extends keyof T` で Kに格納されるkeyの一覧が型となる
// T[K][]でKに格納されていたkeyがアサインされた配列を指定の型とできる
function pluck(o, propertyNames) {
    return propertyNames.map(function (n) { return o[n]; });
}
var taxi = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2014
};
// OK
var makeAndModel = pluck(taxi, ['manufacturer', 'model']);
var makeAndModel2 = pluck(taxi, ['model', 'year']);
// NG, unknownはtaxiに存在しないkeyのため
// let makeAndModel3 = pluck(taxi, ['year', 'unknown']);
// ユニオン型('manufacturer' | 'model' | 'year')
var carProps;
// (number | string)型, Dictionaryのstring型の場合, 42, '42'でアクセスできる故
var keys;
// number型
var values;
var test2;
var test4;
/*******************************************/
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types
